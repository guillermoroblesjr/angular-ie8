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
      // 	src: ['OPUSConfirmationsTrunk_v2.0/opus-confirmation-web/WebContent/html/**'], 
      // 	dest: 'C:/jboss-5.1.0.GA-jdk6/jboss-5.1.0.GA/server/default/tmp/a6q5d12-yfomc6-i9ya6l58-1-i9ya7795-9r/opus-confirmation-web.war/testdir',
      // 	// filter: 'isFile'
      // },

		{
		    expand: true,
		    cwd: 'OPUSConfirmationsTrunk_v2.0/opus-confirmation-web/WebContent/',
		    src: ['html/**', 'css/**', 'js/**', 'bower_components/**'],
		    dest: 'C:/jboss-5.1.0.GA-jdk6/jboss-5.1.0.GA/server/default/tmp/a6q5d12-yfomc6-i9ya6l58-1-i9yp1sby-9w/opus-confirmation-web.war/'
		}

      // // makes all src relative to cwd
      // {expand: true, cwd: 'path/', src: ['**'], dest: 'dest/'},

      // // flattens results to a single level
      // {expand: true, flatten: true, src: ['path/**'], dest: 'dest/', filter: 'isFile'},
    ],
  }
};