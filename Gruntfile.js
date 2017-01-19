module.exports=function(grunt){
	grunt.initConfig({
		pkg:grunt.file.readJSON('package.json'),
		uglify:{
			options:{
				stripBanners:true,
				banner:'/*! <%=pkg.name%>-<%=pkg.version%>.js <%= grunt.template.today("yyyy-mm-dd") %> */\n'
			},
			build:{
				src:'src/*.js',
				dest:'build/js/<%=pkg.name%>-<%=pkg.version%>.js.min.js'
			}
		},
		jshint:{
			options:{
				jshintrc: '.jshintrc'
			},
			build:['Gruntfile.js', 'src/js/flycard.js']
		},
		watch:{
			build: {
				files: ['src/*.js'],
				tasks: ['jshint', 'uglify'],
				options: {spawn: false}
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['jshint','uglify','watch']);
};