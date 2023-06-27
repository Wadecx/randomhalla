export const randomizer = (array) =>{
    const randomElement = array[(Math.floor(Math.random() * (array.length)))];
    return randomElement;
}
