import simulateTask from './Bai05';

export async function callTask() {
    var simulTask = await simulateTask(2000)
    console.log("Bai 12: "+ simulTask)
}