"use strict";
module.exports = {
    config: {
        updateChannel: 'stable',
        fontSize: 14,
        fontFamily: 'SourceCodePro, "DejaVu Sans Mono", Consolas, "Lucida Console", monospace',
        fontWeight: 'normal',
        fontWeightBold: 'bold',
        lineHeight: 1,
        letterSpacing: 0,
        cursorColor: 'rgba(162, 119, 255, 0.8)',        
        cursorAccentColor: '#110f18',
        cursorShape: 'BLOCK',
        cursorBlink: false,
        foregroundColor: '#edecee',
        backgroundColor: '#2f343f',
        selectionColor: '#a394f033',
        borderColor: '#23262e',
        css: '',
        termCSS: '',
        workingDirectory: '',
        showHamburgerMenu: false,
        showWindowControls: false,
        padding: '5px 10px',
        
        // based on hyper-material-theme
        colors: {
            black: '#000000',
            red: '#E54B4B',
            green: '#9ECE58',
            yellow: '#FAED70',
            blue: '#396FE2',
            magenta: '#BB80B3',
            cyan: '#2DDAFD',
            white: '#a0a0a0',
            lightBlack: '#6b6b6b',
            lightRed: '#FF5370',
            lightGreen: '#C3E88D',
            lightYellow: '#FFCB6B',
            lightBlue: '#82AAFF',
            lightMagenta: '#C792EA',
            lightCyan: '#89DDFF',
            lightWhite: '#ffffff'
        },

        shell: '',
        shellArgs: ['--login'],
        env: {},
        bell: false,
        copyOnSelect: true,
        defaultSSHApp: true,
        quickEdit: false,
        macOptionSelectionMode: 'vertical',
        webGLRenderer: false,
        webLinksActivationKey: '',
        disableLigatures: true,
        disableAutoUpdates: false,
    },
    plugins: [
        "hyperminimal", // Hide tab title
    ],
    localPlugins: [],
    keymaps: {
    },
};
//# sourceMappingURL=config-default.js.map