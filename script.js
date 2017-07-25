
(function() {

    var createWorker = function () {

        var workCount = 0;

        var task1 = function () {
            workCount += 1;
            console.log('task 1 ' + workCount);
        };

        var task2 = function () {
            workCount += 1;
            console.log('take 2 ' + workCount);
        };

        return {
            job1: task1,
            job2: task2
        };

    };


    var worker = createWorker();

    worker.job1();
    worker.job2();
    worker.job2();
    worker.job1();

}());
