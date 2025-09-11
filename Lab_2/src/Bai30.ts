function apiCall(id: number) {
    return new Promise((resolve, reject) => {
        const success = Math.random()>0.3;
            if (success) {
                resolve(`API ${id} success`);
            } else {
                reject(`API ${id} failed`);
            }
    });
}
export async function MultipleApiCalls() {
    const apis = [
        apiCall(1),
        apiCall(2),
        apiCall(3),
        apiCall(4),
        apiCall(5),
    ];

    const results = await Promise.allSettled(apis);

    results.forEach((result, index) => {
        if (result.status === "fulfilled") {
            console.log(`Task ${index + 1}:`, result.value);
        } else {
            console.log(`Task ${index + 1}:`, result.reason);
        }
    });
}