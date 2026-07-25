// function validateEmail(email: string): void {
//     const atIndex = email.indexOf("@");
//     const dotIndex = email.lastIndexOf(".");

//     if (
//         atIndex <= 0 ||
//         dotIndex <= atIndex + 1 ||
//         dotIndex >= email.length - 1
//     ) {
//         console.log("Invalid Email");
//         return;
//     }

//     for (let i = 0; i < email.length; i++) {
//         const ch = email[i];

//         const isUpper = ch >= "A" && ch <= "Z";
//         const isLower = ch >= "a" && ch <= "z";
//         const isNumber = ch >= "0" && ch <= "9";
//         const isSpecial =
//             ch === "@" ||
//             ch === "." ||
//             ch === "_" ||
//             ch === "-";

//         if (
//             !isUpper &&
//             !isLower &&
//             !isNumber &&
//             !isSpecial
//         ) {
//             console.log("Invalid Email");
//             return;
//         }
//     }

//     console.log("Valid Email");
// }


// validateEmail("rajputdigvijay12@gmail.com") 