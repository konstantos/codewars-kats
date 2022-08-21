function bubblesortOnce(arr) {
    let Arr = arr.slice();
    for (let i = 0; i < Arr.length - 1; i++) {
        if (Arr[i] > Arr[i + 1]) {
        [Arr[i], Arr[i + 1]] = [Arr[i + 1], Arr[i]];
        }
    }
    return Arr;
}