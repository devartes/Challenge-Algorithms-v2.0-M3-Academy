export function mostUsedChar(text) {
    // implementar logica aqui
    let max = 0,
        maxChar = '';
        text.split('').forEach(function(char){
            if(text.split(char).length > max) {
                max = text.split(char).length;
                maxChar = char;
            }
        });
    return maxChar;
}