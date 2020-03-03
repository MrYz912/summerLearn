//模块化
// export let A = 123;

// export function test() {
//     console.log("test");
// }

// export class Hello{
//     test() {
//         console('class');
//     }
// }

{
    let A = 123;

    function test() {
        console.log("test");
    }

    class Hello{
        test() {
            console('class');
        }
    }
}

export default{//另一种导出方式
    A,
    test,
    Hello
}