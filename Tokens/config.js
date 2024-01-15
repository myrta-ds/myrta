const StyleDictionaryPackage = require('style-dictionary');

// HAVE THE STYLE DICTIONARY CONFIG DYNAMICALLY GENERATED

StyleDictionaryPackage.registerFormat({
    name: 'css/variables',
    formatter: function (dictionary, config) {
        return `${this.selector} {
        ${dictionary.allProperties.map(prop => `  --${prop.name}: ${prop.value};`).join('\n')}
      }`
    }
});

StyleDictionaryPackage.registerTransform({
    name: 'sizes/px',
    type: 'value',
    matcher: function (prop) {
        const types = ["fontSize", "spacing", "borderRadius", "borderWidth", "sizing", "media"]
        const boxShadowTypes = ["boxShadow"]
        const boxShadowValueTypes = ["spread", "blur", "y", "x"]
        const headlinesTypes = ["headlines", "body"]
        const headlinesValueTypes = ["fontSize", "paragraphSpacing", "y", "x", "lineHeight"]

        return types.includes(prop.attributes.category) ||
            boxShadowTypes.includes(prop.attributes.category) && boxShadowValueTypes.includes(prop.attributes.item) ||
            headlinesTypes.includes(prop.attributes.category) && headlinesValueTypes.includes(prop.attributes.item)
    },
    transformer: function (prop) {
        if (typeof prop.original.value === 'string' && prop.original.value[prop.original.value.length - 1] === '%') {
            return prop.original.value;
        } else {
            return parseFloat(prop.original.value) + 'px';
        }
    }
});

StyleDictionaryPackage.registerTransform({
    name: 'sizes/null',
    type: 'value',
    matcher: function (prop) {
        return prop.original.value === ''
    },
    transformer: function (prop) {
        return 'none'
    }
});

function getStyleDictionaryConfig(theme) {
    return {
        "source": [
            `transformed/${theme}.json`,
        ],
        "platforms": {
            "scss": {
                "transforms": ["attribute/cti", "name/cti/kebab", "sizes/px", "sizes/null"],
                "buildPath": `../Common/Shared/Styles/Tokens/`,
                "files": [{
                    destination: `${theme}.less`,
                    format: "less/variables"
                }]
            }
        }
    };
}

console.log('Build started...');

// PROCESS THE DESIGN TOKENS FOR THE DIFFEREN BRANDS AND PLATFORMS

[
    "generalThemes",
    "colorThemeMinfin",
    "typeThemePtSans",
].map(function (theme) {

    console.log('\n==============================================');
    console.log(`\nProcessing: [${theme}]`);

    const StyleDictionary = StyleDictionaryPackage.extend(getStyleDictionaryConfig(theme));

    StyleDictionary.buildPlatform('scss');

    console.log('\nEnd processing');
})

console.log('\n==============================================');
console.log('\nBuild completed!');
