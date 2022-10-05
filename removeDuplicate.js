// this function remove duplicate number and string

const ticketOwner = ['hasem', 'kasem', 'jannat', 'nushrat', 'kasem', ' payel', 'polly', 'hasem', 'kasem'];
function removeDuplicate(name) {
     const unique = [];
     for (const element of name) {
          if (unique.indexOf(element) === -1) {
               unique.push(element)

          }
     }
     return unique;
};

const myList = removeDuplicate(ticketOwner);
console.log(myList);