  let btn = document.querySelector("#btn1");
    let input = document.querySelector("#taskInput");
    let list = document.querySelector("#taskList");

    btn.addEventListener("click", () => {
      let taskText = input.value.trim();

      if (taskText === "") {
        alert("Please enter a task!");
        return;
      }
      let li = document.createElement("li");
      li.textContent = taskText;
      let delBtn = document.createElement("button");
      delBtn.textContent = "deleted";
      delBtn.style.marginLeft = "10px";

      delBtn.addEventListener("click", () => {
        li.remove();
      });

      li.appendChild(delBtn);
      list.appendChild(li);
      input.value = "";
    });