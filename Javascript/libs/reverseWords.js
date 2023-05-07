

function reverseWords(str){
    return str.split(' ').filter((val)=> val != '').reverse().join(' ');
}

module.exports = reverseWords;