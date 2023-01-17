// reading files

// const fs = require('fs');
// fs.readFile('./docs/docs.txt' , (err, data)=> {

//     if(err){

//         console.log(err);
//     }
// console.log(data.toString());

// })


// console.log('last line is here');
// writing files

// const fs = require('fs');
// fs.writeFile('../docs/docs1.txt' , 'this is what we write' , (err)=> {

//     if(err){

//         console.log(err);
//     }
// }
// )




// directories

// const fs = require('fs');

// if (!fs.existsSync('./new_folder')) {


//     fs.mkdir('./new_folder', (err) => {

//         if (err) {

//             console.log(err);
//         }

//         console.log('directory created');
//     }
//     )

// }
// else {

//     fs.rmdir('./new_folder', (err) => {

//         if (err) {

//             console.log(err);
//         }

//         else {

//             console.log('folder deleted')

//         }
//     })

// }



// deleting files


const fs = require('fs');
if (fs.existsSync('./docs/delete.txt')) {
    fs.unlink('./docs/delete.txt', (err) => {

        if (err) {

            console.log(err);
        }
        console.log('file deleted')

    })
}

else {

    console.log('files does not exist')
}