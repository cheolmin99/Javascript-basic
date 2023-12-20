/**
 * try...catch
 * 
 * 1) 발생시킬때 -> 던진다고 한다 (throw)
 * 2) 명시적으로 인지할떄 -> 잡는다고 한다(catch)
 */
function runner() {
    try {
        console.log('hello');
    
        // throw new Error('큰 문제가 생겼습니다!');
    
        console.log('Code Factory');
    }catch(e){
        console.log('---catch---')
        console.log(e);
    } finally {
        console.log('---finally---');
    }
}
runner();