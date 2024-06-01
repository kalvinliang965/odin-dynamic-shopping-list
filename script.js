   // my code

   const unorderList = document.querySelector("ul");
   const input = document.querySelector("input");
   const button = document.querySelector("button");


   function buttonClickedHandler() {
        console.log("Event listener trigger");
        const value = input.value;

        input.value = "";
        const li = document.createElement("li");
        const span = document.createElement("span");
        const button = document.createElement("button");
        

        li.appendChild(span);
        li.appendChild(button);
        span.textContent = value;
        button.textContent = "Delete";
        unorderList.appendChild(li);

        button.addEventListener('click', () => unorderList.removeChild(li));
        input.focus();
   }
   
   button.addEventListener('click', buttonClickedHandler);

   