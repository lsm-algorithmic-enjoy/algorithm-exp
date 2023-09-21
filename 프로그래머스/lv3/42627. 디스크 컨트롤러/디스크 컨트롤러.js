function solution(jobs) {
    
    let totalTime = 0;
    let currentTime = 0;
    let waitingRoom = [];
    
    const scheduling = () => {
        if (!waitingRoom.length) return false;
        
        const [inputTime, workTime] = waitingRoom.shift();
        totalTime += currentTime - inputTime + workTime;
        currentTime += workTime;
        return true;
    };
    
    const insertJob = (job) => {
        waitingRoom.push(job);
        waitingRoom.sort((a,b) => a[1] - b[1]);
    };
    
    jobs.sort((a,b) => a[0] - b[0])
    .forEach(([inputTime,workTime]) => {
        while(currentTime < inputTime) {
            if (!scheduling()) {
                currentTime = inputTime;
            }
        }
        insertJob([inputTime, workTime]);
    });
    
    while(waitingRoom.length > 0) {
        scheduling();
    }
    return parseInt(totalTime / jobs.length);
}