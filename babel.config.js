module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    [
      'component',
       {
         libraryName: "personal-component",
         style: true
       }
     ]
    ]
}
