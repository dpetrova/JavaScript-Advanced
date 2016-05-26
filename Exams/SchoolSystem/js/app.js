var app = app || {};

(function (schoolSystem) {
    var gradeService = new schoolSystem.GradeService;
    var studentSelector = $("#student-selector");
    //var studentSelector = document.getElementById('student-selector');
    var fragment = document.createDocumentFragment();

    schoolSystem.students.forEach(function (student) {
        var option = document.createElement('option');
        option.value = student.getName();
        option.innerText = student.getName();
        fragment.appendChild(option);
        //studentSelector.append(option);
    });
    studentSelector.append(fragment);

    studentSelector.change(function () {
        var value = $(this).val();
        if (value != "null") {
            loadGradesForStudent($(this).val());
        }
    });

    function loadGradesForStudent(studentName) {
        function findStudentByName(student) {
            return student.getName() == studentName;
        }

        var student = schoolSystem.students.find(findStudentByName);
        var grades = gradeService.getGrades(student);
        console.log(grades);
        $.get("templates/list-grades.html", function (template) {
            $("#grades").html(Mustache.render(template, {Grades: grades}))
        })
    }
}(app));