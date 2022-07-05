let API_URL = "https://62ab6beda62365888bdc2f11.mockapi.io/Hw13";
const table = document.querySelector("table");
document.addEventListener("DOMContentLoaded", () => {
  readInfo();
});

function readInfo() {
  fetch(`${API_URL}`)
    .then((response) => response.json())
    .then(async (data) => {
      const projectId1 = await data.filter((item) => {
        return item.ProjectId === 1;
      });
      const projectId10093 = await data.filter((item) => {
        return item.ProjectId === 10093;
      });
      const projectId10094 = await data.filter((item) => {
        return item.ProjectId === 10094;
      });
      const sorted1 = await projectId1.sort((item1, item2) => {
        return item1.SiteId - item2.SiteId;
      });
      const sorted2 = await projectId10093.sort((item1, item2) => {
        return item1.SiteId - item2.SiteId;
      });
      const sorted3 = await projectId10094.sort((item1, item2) => {
        return item1.SiteId - item2.SiteId;
      });
      return { sorted1, sorted2, sorted3 };
    })
    .then(({ sorted1, sorted2, sorted3 }) => {
      setTimeout(() => {
        for (let i = 0; i <= sorted1.length; i++) {
          console.log(sorted1);
          const td1 = document.createElement("td");
          const tr1 = document.querySelector("#tr1");
          td1.innerHTML = sorted1[i].SiteId;
          tr1.appendChild(td1);
          td1.style.backgroundColor = "blueviolet";
        }
      });

      setTimeout(() => {
        for (let i = 0; i <= sorted1.length; i++) {
          const td2 = document.createElement("td");
          const tr2 = document.querySelector("#tr2");
          td2.innerHTML = sorted1[i].Target;
          tr2.appendChild(td2);
        }
      }, 100);
      setTimeout(() => {
        for (let i = 0; i <= sorted2.length; i++) {
          const td3 = document.createElement("td");
          const tr2 = document.querySelector("#tr3");
          td3.innerHTML = sorted2[i].Target;
          tr2.appendChild(td3);
        }
      }, 200);
      setTimeout(() => {
        for (let i = 0; i <= sorted3.length; i++) {
          const td4 = document.createElement("td");
          const tr2 = document.querySelector("#tr4");
          td4.innerHTML = sorted3[i].Target;
          tr2.appendChild(td4);
        }
      }, 300);
    });
  table.setAttribute("border", "1");
  table.setAttribute("cellpadding", "10px");
}
