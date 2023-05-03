const boxContainer = document.querySelectorAll(".box-container");
const checkBtn = document.getElementById("check");

const navbar = document.querySelector(".navbar");
const allTopics = document.querySelectorAll(".topic-list li");

const dropDown = document.querySelectorAll("[data-dropdown-button]");
const dropdown = document.querySelectorAll(".dropDown");
const something = "gelaa axali gela";
dropdown.forEach((drop, index) => {
  let drops = drop.children;

  drop.setAttribute("data-parent-index", index);
  for (let i = 0; i < drops.length; i++) {
    drops[i].setAttribute("data-index", i);
  }
});

document.addEventListener("click", (e) => {
  const isDropDownButton = e.target.matches("[data-dropdown-button]");
  if (!isDropDownButton && e.target.closest("[data-dropdown]") != null) return;

  let currentdropdown;

  if (isDropDownButton) {
    currentdropdown = e.target.closest("[data-dropdown]");

    currentdropdown.childNodes[2].classList.toggle("active");
  }

  document.querySelectorAll(".dropDown.active").forEach((dropDown) => {
    if (!currentdropdown || dropDown === currentdropdown.childNodes[2]) return;
    dropDown.classList.remove("active");
  });
  if (!navbar.contains(e.target)) {
    document.querySelectorAll(".active").forEach((elem) => {
      elem.classList.remove("active");
    });
  }

  const actives = document.querySelectorAll(".active");
  actives.forEach((item) => {
    const active = document.querySelector(".active");

    const activeRight = active.getBoundingClientRect().right;
    // console.log(activeRight);

    if (activeRight > window.innerWidth) {
      active.style.position = "absolute";
      active.style.right = 0;
    }
    let parentIndex = item.getAttribute("data-parent-index");

    const selectedDiv = item.children;
    Array.from(selectedDiv).forEach((div) => {
      div.addEventListener("click", () => {
        let childIndex = div.getAttribute("data-index");
        let boxes = document.querySelectorAll(".box");
        boxes.forEach((box) => {
          box.remove();
        });

        addQuestions(topics[parentIndex][childIndex]);

        let draggables = document.querySelectorAll(".box");
        draggables.forEach((draggable) => {
          draggable.addEventListener("dragstart", () => {
            draggable.classList.add("dragging");
          });

          draggable.addEventListener("dragend", () => {
            draggable.classList.remove("dragging");
          });
        });
        const upButton = document.getElementById("up");

        const downButton = document.getElementById("down");
        if (boxContainer[0].children.length !== 0) {
          boxContainer[0].style.opacity = 1;
          checkBtn.style.opacity = 1;
        }
        if (window.innerWidth < 450) {
          navbar.classList.add("displayNone");
          const newBoxes = document.querySelectorAll(".box");
          let currentBox = null;
          newBoxes.forEach((box) => {
            box.addEventListener("click", () => {
              if (currentBox) {
                currentBox.classList.remove("selected");
              }
              box.classList.toggle("selected");
              currentBox = box;
            });
          });
        }
        if (window.innerWidth < 450) {
          boxContainer.forEach((container) => {
            upButton.style.opacity = 1;
            downButton.style.opacity = 1;
            upButton.onclick = function () {
              let selectedBox = document.querySelector(".selected");
              let previousBox = selectedBox.previousElementSibling;

              container.insertBefore(selectedBox, previousBox);
            };
            downButton.onclick = function () {
              let selectedBox = document.querySelector(".selected");
              let nextBox = selectedBox.nextElementSibling;
              container.insertBefore(nextBox, selectedBox);
            };
          });
        }
      });
    });
  });
});
if (boxContainer[0].children.length === 0) {
  boxContainer[0].style.opacity = 0;
  checkBtn.style.opacity = 0;
}

const topics = [
  //ძველი აღმოსავლეთი
  [
    [
      "ფარაონმა მენესმა გააერთიანა ქვემო და ზემო სამეფო",
      "პირამიდების ეპოქა",
      "შინა ომები და ეგვიპტის ძველი სამეფოს დაცემა",
      " ერთიანი ეგვიპტის სამეფო შუა სამეფოს ხანა ",
      "ეგვიპტეში შემოიჭრნენ ჰიქსოსები და შუა სამეფო დაეცა",
      "ეგვიპტელებმა ჰიქსოსები გაყარეს და იიწყება ახალი სამეფოს ხანა (თუტმოს პირველი)",
      "რამზეს II ",
      "ძვ.წ 1274 წელი ქადეშის ბრძოლა ეგვიპტე ხეთებთან(პირველი ზავი ისტორიაში)",
      "ასურელებმა დაიპყრეს ეგვიპტე",
      "აქემენიდურმა ირანმა დაიპყრო ეგვიპტე",
    ],

    [
      "ხამურაბმა დაიპყრო სამხრეთ მესოპოტამია შემდეგ კი ასურეთი ",
      " ბაბილონი  გაანადგურეს ხეთებმა ",

      "ნაბუქოდონოსორ II-მ  აღადგინა ბაბილონი",

      "ნაბუქოდონოსორმა II ებრაელები ბაბილონში გადაასახლა",
      "აქემენიდურმა ირანმა(კიროსმა) დაიპყრო ბაბილონი",
    ],
    [
      "ასურეთი უძლიერესი სახელმწიფო(ტიგლათფილესერ I )",
      "არამეელების შემოსევების გამო დასუსტდა ასურეთი",
      " ასურეთის ძლიერების ეპოქა (ტიგლათფილესელ III)",
      "სარგონ II(უდიდესი სამხედრო იმპერია) დაიპყრეს ეგვიპტე",
      "სინაქერიბმა დედაქალაქი ნინევიაში გადმოიტანა",
      "ძვ.წ 612 წელს დაეცა ასურეთის ქალაქი ნინევია(ბაბილონმა და მიდიამ)",
      "ნაბუქოდონოსორ II-მ საბოლოოდ დაამარცხა ასურეთის უკანასკნელი მეფე ასურუბალიტი",
      "ურარტუ გაანადგურა მიდიამ ძვ.წ 590 წელს",
    ],

    [
      "ჩამოყალიბდა აქემენიანთა ირანი 550 წელი(კიროსი)",
      "აქემენიდურმა ირანმა დაიპყრო ბაბილონი(კიროსი)",
      "აქემენიდურმა ირანმა დაიპყრო ფინიკია",

      "აქემენიდურმა ირანმა დაიპყრო ეგვიპტე",
      "დარიოსის რეფორმები",
      "მარათონის ბრძოლა",
      "ქსერქსე I",
      "თერმოპილეს ბრძოლა",
      "სალამინის ბრძოლა",
      "პლატეას ბრძოლა",
      "მიკალის კონცხთან ბრძოლა",
      "კალიასის ზავი",
    ],
    [
      "ფილიპე II დაამარცხა ბერძნები ქერონეასთან",
      "გრანიკოსის ბრძოლა",
      "ბრძოლა მდინარე ისოსთან",
      "გავგამელას ბრძოლა",
    ],
  ],
  //რომი
  [
    [
      "რომი და კართაგენი იწყებს ომს სიცილიაზე ბატონობისთვის",
      "იბერიის ნახევარკუნძულზე ლაშქრობისას დაიღუპა ჰამილკარ ბარკა",
      "ჰანიბალმა აიღო ერთ-ერთი ესპანური ქალაქი",
      "კანეს ბრძოლა",
      "ზამას ბრძოლა ",
      "მაგნეზის ბრძოლა",
      "კართაგენის სამფლობელოებს თავს დაესხა ნუმიდიის მეფე",
      "ძვ.წ 146 წელს ციპიონ უმცროსმა კართაგენი აიღო",
    ],
    [
      "კრასუსმა ჩაახშო სპარტაკის აჯანყება",
      "პირველი ტრიუმვირატი",
      "კრასუსი დაიღუპა პართიელებთან ბრძოლაში",
      "კეისარი ამარცხებს პომპეუსს",
      "კეისრის მკვლელობა",
      "ბრძოლა აქციუმის კონცხთან ",
    ],
    [
      "ოქტავიანე გარდაიცვალა",
      "კარაკალას ედიქტი",
      "დიოკლიტიანეს რეფორმები",
      "ტეტრარქია",
    ],
    [
      "ეფესოს საღამო",
      "მითრიდატე შედის საბერძნეთში",
      "სულა იღებს ათენს და ამარცხებს მითრიდატეს",
      "მითრიდატე ძვ.წ 85 წლის ზავს დებს რომთან",
      "მითრიდატე მარცხდება ლუციუს ლუკულუსთან",
      "მითრიდატემ სიცოცხლე თვითმკვლელობით დაასრულა",
    ],
    [
      "მილანის ედიქტი",
      "ნიკეას საეკლესიო კრება",
      "კონსტანტინოპოლის დაარსება",
      "კონსტანტინოპოლის საეკლესიო კრება",
      "თეოდოსიუსის ედიქტი",
      "ქალკედონის საეკლესიო კრება",
    ],
    [
      "ადრიანოპოლის ბრძოლა",
      "თეოდოსიუსმა გაუყო რომი თავის შვილებს",
      "ალარიხმა აიღო ,,მარადიული ქალაქი''",
      "კატალაუნის ბრძოლა",
      "ჰაიზერიხის ლაშქრობა რომზე",
      "ოდოაკრმა დაამხო რომი",
    ],
  ],
  //ბიზანტია
  [
    [
      " 'კოდექსი იუსტინიანესი'",
      "მარადიული ზავი",
      "ველიზარი შეიჭრა აფრიკაში",
      "ველიზარმა დაამარცხა გოთები",
      "დაირღვა მარადიული ზავი",
    ],
  ],
  //ირანი
  [
    [
      "არდაშირმა დაამარცხა პართიის უკანასკნელი მეფე",
      "შაბურ I-მა აიღო ანტიოქია",
      "რომის იმპერატორი ვალერიანე ტყვედ ჩავარდა ოდესასთან ბრძოლაში",
      "ნიზიბინის ზავი",
    ],
  ],
  //არაბები
  [],
  //დაგლეჯილი საქარველო
  [["დაირღვა ''საუკუნო ზავი'' ", "გუბაზ მეფე მოკლეს", "დარას ზავი"]],
  //სელჩუკები
  [],
  //ჯვაროსნული ლაშქრობები
  [],
  //ერთიანი საქართველო
  [],
  //მონღოლები
  [],
  //ევროპა შუა საუკუნეებში
  [
    [],
    [
      "ენრიკო ზღვაოსანი",
      "ბართოლომეო დიასი",
      "ქრისტეფორე კოლუმბი",
      "ვასკო-და-გამა",
      "მაგელანის მოგზაურობა",
    ],
    [
      "''არეულობის საქმეთა საბჭო''",
      "ლეიდენის ალყა",
      "ანტვერპენის დარბევა",
      "ჰოლანდია გამოცხადდა დამოუკიდებელ სახელმწიფოდ",
      "განადგურდა ''უძლეველი არმადა''(1588)",
      "ჰააგას ზავი",
      "მიუნსტერის ზავი",
    ],
    [
      "დაბა ვასის ინციდენტი",
      "სან-ჟერმენის ზავი",
      "ბართლომეს ღამე",
      "3 ანრის ომი",
    ],

    [
      "ევანგელისტური უნია",
      "კათოლიკური ლიგა",
      "ფერდინანდ II-მ პროტესტანთა სამლოცველოები დახურა",
      "ქრისტიან IV იწყებს საომარ მოქმედებებს",
      "გუსტავ ადოლფი ქ.ლუტცერთან მოკლეს",

      "ვესტფალიის ზავი",
    ],
    [
      "ჰენრი ტიუდორი ამარცხებს რიჩარდ III",
      "ელიზაბედ I-მა გაანადგურა უძლეველი არმადა",
      "''პეტიცია უფლებათა შესახებ''",
      "შოტლანდიელები შეიჭრნენ ინგლისში",
      "ჩარლზ I-მა დაითხოვა 'ხანმოკლე პარლამენტი'",
      "დიდი რემონსტრაცია",
      "ნეიზბის ბრძოლა",
      "ჩარლზ I-ს თავი მოჰკვეთეს",
      "'სანავიგაციო აქტი'",
      "უსისხლო რევოლუცია",
      "უფლებათა ბილი",
    ],
    [
      "ნანტის ედიქტი",
      "ანრი IV კათოლიკე რავალიაკმა მოკლა",
      "რიშელიემ აიღო ჰუგენოტთა ქალაქი ლა-როშელი",
      "ფრონდას აჯანყება",
      "ლუი XIV-მ რეზიდენცია ვერსალში გადაიტანა",
      "'მერკანტელიზმი'",
      "ლუიმ გააუქმა ნანტის ედიქტი",
    ],
    [
      "ლივონიის ომი",
      "''ლუბლინის უნია''",
      "რუსეთმა პრუსიამ და ავსტრიამ რეჩ-პოსპოლიტა გადაინაწილეს",
    ],
  ],
  //ოსმალეთი
  [
    [],
    [
      "სულთან სულეიმან I",
      "ბელგრადის აღება",
      "კუნძული როდოსის აღება",
      "მოხაჩის ბრძოლა",
      "ვენის ალყა",
      "კუნძულ კვიპროსის დაპყრობა",
      " პირველად იქმნება ''საღვთო ლიგა'' ",
      "ლეპანტოს საზღვაო ბრძოლა",
      "კარლოვიცის ზავი",
    ],
  ],
];

function shuffleArray(array) {
  const newArray = [...array]; // create a copy of the original array
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

function addQuestions(arr) {
  const newArr = shuffleArray(arr);

  newArr.forEach((word) => {
    let question = document.createElement("div");
    question.classList.add("box");
    question.setAttribute("draggable", "true");
    question.textContent = word;
    boxContainer.forEach((container) => {
      container.appendChild(question);
    });
  });
  checkBtn.addEventListener("click", () => {
    if (window.innerWidth < 768) {
      let boxToRemove = document.getElementsByClassName("selected");
      // console.log(boxToRemove[0]);
      if (boxToRemove.length > 0) {
        boxToRemove[0].classList.remove("selected");
      }
    }
    console.log(window.innerWidth);
    correct(arr);
  });
}

function correct(array) {
  const answers = [];

  boxContainer[0].childNodes.forEach((elem, index) => {
    answers.push(elem.textContent);
  });
  answers.shift();
  let boxItems = document.querySelector(".box-container");

  for (let i = 0, j = 0; i < array.length, j < answers.length; i++, j++) {
    if (array[i] == answers[j]) {
      boxItems.children[i].classList.add("correct");
      boxItems.children[i].classList.remove("wrong");
    } else if (array[i] !== answers[j]) {
      boxItems.children[i].classList.add("wrong");

      boxItems.children[i].classList.remove("correct");
    }
  }
}

boxContainer.forEach((container) => {
  container.addEventListener("dragover", (e) => {
    e.preventDefault();
    const afterElement = getDragAfterElement(container, e.clientY);

    const draggable = document.querySelector(".dragging");

    // console.log(afterElement);
    if (afterElement == null) {
      container.appendChild(draggable);
    } else {
      container.insertBefore(draggable, afterElement);
    }
  });
});

function getDragAfterElement(container, y) {
  const draggableElements = [
    ...container.querySelectorAll(".box:not(.dragging)"),
  ];

  return draggableElements.reduce(
    (closest, child) => {
      const box = child.getBoundingClientRect();

      const offset = y - box.top - box.height / 2;

      if (offset < 0 && offset > closest.offset) {
        return { offset: offset, element: child };
      } else {
        return closest;
      }
    },
    {
      offset: Number.NEGATIVE_INFINITY,
    }
  ).element;
}

const menuIcon = document.querySelector(".menu");
const navbarAdd = navbar.classList.add("displayNone");

menuIcon.addEventListener("click", () => {
  if (navbar.classList.contains("displayNone")) {
    boxContainer[0].style.marginTop = "50px";

    navbar.classList.remove("displayNone");
  } else {
    navbar.classList.add("displayNone");
  }
});
