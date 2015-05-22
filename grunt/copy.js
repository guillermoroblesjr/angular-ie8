module.exports = {
  main: {
    // options: {
    //   process: function (content, srcpath) {
    //     // return content.replace(/[sad ]/g,"_");
    //   },
    // },
    files: [
      // includes files within path
      // {expand: true, src: ['path/*'], dest: 'dest/', filter: 'isFile'},

      // includes files within path and its sub-directories
      // { 
      // 	expand: true, 
      // 	src: [html/**'], 
      // 	dest: 'testdir',
      // 	// filter: 'isFile'
      // },

		{
		    expand: true,
		    cwd: '',
		    src: ['html/**', 'css/**', 'js/**', 'bower_components/**'],
		    dest: ''
		}

      // // makes all src relative to cwd
      // {expand: true, cwd: 'path/', src: ['**'], dest: 'dest/'},

      // // flattens results to a single level
      // {expand: true, flatten: true, src: ['path/**'], dest: 'dest/', filter: 'isFile'},
    ],
  }
};