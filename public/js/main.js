const expensesList=document.querySelector("#expenses ul");let budget;function startApp(){requestName(),requestBudget(),budgetFormEvents()}document.addEventListener("DOMContentLoaded",startApp);class Budget{constructor(e){this.budgetTotal=e,this.budgetAvailable=e,this.budgetSpent=0,this.expenses=[]}newExpenses(e){this.expenses=[...this.expenses,e],this.calculateSpent()}calculateSpent(){this.budgetSpent=this.expenses.reduce((e,t)=>e+t.inputAmount,0),this.budgetAvailable=this.budgetTotal-this.budgetSpent}}class UserInterface{insertName(e){document.querySelector(".budget__heading--user-name").textContent=e+"!"}insertBudget(e){const{budgetTotal:t,budgetAvailable:n,budgetSpent:r}=e;let s=t.toLocaleString("es-MX",{style:"currency",currency:"MXN"}),u=n.toLocaleString("es-MX",{style:"currency",currency:"MXN"}),o=r.toLocaleString("es-MX",{style:"currency",currency:"MXN"});document.querySelector("#budgetCardTotal").textContent=""+s,document.querySelector("#budgetCardAvailable").textContent=""+u,document.querySelector("#budgetCardSpent").textContent=""+o}printAlerts(e,t){const n=document.createElement("p");n.classList.add("alert"),"error"===t?n.classList.add("alert--error"):n.classList.add("alert--success"),n.textContent=e;document.querySelector("#budgetForm").appendChild(n),setTimeout(()=>{n.remove()},3e3)}addExpenseList(e){this.cleanHtml(),e.forEach(e=>{const{inputName:t,inputAmount:n,selectedCategory:r,id:s}=e,u=n.toLocaleString("es-MX",{style:"currency",currency:"MXN"}),o=document.createElement("li");o.className="expense-item",o.dataset.id=s,o.dataset.category=r,o.innerHTML=`\n        <div class="expense-item__texts">\n          <p class="expense-item__description">${t}</p>\n          <p class="expense-item__price">${u}</p>\n        </div>\n      `;const c=document.createElement("button");c.classList.add("expense-item__btn"),c.textContent="X",o.appendChild(c),expensesList.appendChild(o)})}cleanHtml(){for(;expensesList.firstChild;)expensesList.removeChild(expensesList.firstChild)}updateBudget(e,t){let n=e.toLocaleString("es-MX",{style:"currency",currency:"MXN"}),r=t.toLocaleString("es-MX",{style:"currency",currency:"MXN"});document.querySelector("#budgetCardAvailable").textContent=""+n,document.querySelector("#budgetCardSpent").textContent=""+r}}const userInterface=new UserInterface;function requestName(){let e;do{e=prompt("¿Cuál es tu nombre?"),e||alert("Por favor, introduce un nombre válido.")}while(!e);userInterface.insertName(e)}function requestBudget(){const e=Number(prompt("¿Cuál es tu presupuesto?"));(""===e||null===e||isNaN(e)||e<=0)&&window.location.reload(),budget=new Budget(e),userInterface.insertBudget(budget)}function budgetFormEvents(){document.querySelector("#budgetForm").addEventListener("submit",addExpense)}function addExpense(e){e.preventDefault();const t=document.querySelector("#budgetFormName").value,n=Number(document.querySelector("#budgetFormAmount").value),r=document.querySelector("#budgetFormCategory").value;if(""===t||""===n||""===r)return void userInterface.printAlerts("Todos los campos son obligatorios","error");if(n<=0||isNaN(n))return void userInterface.printAlerts("Cantidad no valida","error");const s={inputName:t,inputAmount:n,selectedCategory:r,id:Date.now()};budget.newExpenses(s),userInterface.printAlerts("Se agregó correctamente","success");const{expenses:u,budgetAvailable:o,budgetSpent:c}=budget;userInterface.addExpenseList(u),userInterface.updateBudget(o,c);document.querySelector("#budgetForm").reset()}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiZXhwZW5zZXNMaXN0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYnVkZ2V0Iiwic3RhcnRBcHAiLCJyZXF1ZXN0TmFtZSIsInJlcXVlc3RCdWRnZXQiLCJidWRnZXRGb3JtRXZlbnRzIiwiYWRkRXZlbnRMaXN0ZW5lciIsIkJ1ZGdldCIsIltvYmplY3QgT2JqZWN0XSIsImJ1ZGdldFRvdGFsIiwidGhpcyIsImJ1ZGdldEF2YWlsYWJsZSIsImJ1ZGdldFNwZW50IiwiZXhwZW5zZXMiLCJleHBlbnNlIiwiY2FsY3VsYXRlU3BlbnQiLCJyZWR1Y2UiLCJ0b3RhbCIsImlucHV0QW1vdW50IiwiVXNlckludGVyZmFjZSIsInVzZXJOYW1lIiwidGV4dENvbnRlbnQiLCJxdWFudGl0eSIsImZvcm1hdHRlZFRvdGFsIiwidG9Mb2NhbGVTdHJpbmciLCJzdHlsZSIsImN1cnJlbmN5IiwiZm9ybWF0dGVkQXZhaWxhYmxlIiwiZm9ybWF0dGVkU3BlbnQiLCJtZXNzYWdlIiwidHlwZUFsZXJ0IiwiYWxlcnRNZXNzYWdlIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsImFwcGVuZENoaWxkIiwic2V0VGltZW91dCIsInJlbW92ZSIsImNsZWFuSHRtbCIsImZvckVhY2giLCJpbnB1dE5hbWUiLCJzZWxlY3RlZENhdGVnb3J5IiwiaWQiLCJmb3JtYXR0ZWRBbW91bnQiLCJuZXdFeHBlbnNlIiwiY2xhc3NOYW1lIiwiZGF0YXNldCIsImNhdGVnb3J5IiwiaW5uZXJIVE1MIiwiZGVsZXRlQnRuIiwiZmlyc3RDaGlsZCIsInJlbW92ZUNoaWxkIiwiYXZhaWxhYmxlIiwic3BlbnQiLCJ1c2VySW50ZXJmYWNlIiwicHJvbXB0IiwiYWxlcnQiLCJpbnNlcnROYW1lIiwidXNlckJ1ZGdldCIsIk51bWJlciIsImlzTmFOIiwid2luZG93IiwibG9jYXRpb24iLCJyZWxvYWQiLCJpbnNlcnRCdWRnZXQiLCJhZGRFeHBlbnNlIiwiZSIsInByZXZlbnREZWZhdWx0IiwidmFsdWUiLCJwcmludEFsZXJ0cyIsIkRhdGUiLCJub3ciLCJuZXdFeHBlbnNlcyIsImFkZEV4cGVuc2VMaXN0IiwidXBkYXRlQnVkZ2V0IiwicmVzZXQiXSwibWFwcGluZ3MiOiJBQUNBLE1BQU1BLGFBQWVDLFNBQVNDLGNBQWMsZ0JBQzVDLElBQUlDLE9BS0osU0FBU0MsV0FDUEMsY0FDQUMsZ0JBQ0FDLG1CQUxGTixTQUFTTyxpQkFBaUIsbUJBQW9CSixVQVM5QyxNQUFNSyxPQUNKQyxZQUFZQyxHQUNWQyxLQUFLRCxZQUFjQSxFQUNuQkMsS0FBS0MsZ0JBQWtCRixFQUN2QkMsS0FBS0UsWUFBYyxFQUNuQkYsS0FBS0csU0FBVyxHQUdsQkwsWUFBWU0sR0FDVkosS0FBS0csU0FBVyxJQUFJSCxLQUFLRyxTQUFVQyxHQUNuQ0osS0FBS0ssaUJBR1BQLGlCQUNFRSxLQUFLRSxZQUFjRixLQUFLRyxTQUFTRyxPQUMvQixDQUFDQyxFQUFPSCxJQUFZRyxFQUFRSCxFQUFRSSxZQUNwQyxHQUVGUixLQUFLQyxnQkFBa0JELEtBQUtELFlBQWNDLEtBQUtFLGFBSW5ELE1BQU1PLGNBQ0pYLFdBQVdZLEdBQ2NyQixTQUFTQyxjQUM5QiwrQkFJYXFCLFlBQWlCRCxFQUFILElBRy9CWixhQUFhYyxHQUNYLE1BQU1iLFlBQUVBLEVBQVdFLGdCQUFFQSxFQUFlQyxZQUFFQSxHQUFnQlUsRUFHdEQsSUFBSUMsRUFBaUJkLEVBQVllLGVBQWUsUUFBUyxDQUN2REMsTUFBTyxXQUNQQyxTQUFVLFFBRVJDLEVBQXFCaEIsRUFBZ0JhLGVBQWUsUUFBUyxDQUMvREMsTUFBTyxXQUNQQyxTQUFVLFFBRVJFLEVBQWlCaEIsRUFBWVksZUFBZSxRQUFTLENBQ3ZEQyxNQUFPLFdBQ1BDLFNBQVUsUUFJWjNCLFNBQVNDLGNBQ1Asb0JBQ0FxQixZQUFjLEdBQUdFLEVBQ25CeEIsU0FBU0MsY0FDUCx3QkFDQXFCLFlBQWMsR0FBR00sRUFDbkI1QixTQUFTQyxjQUNQLG9CQUNBcUIsWUFBYyxHQUFH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LyogVmFyaWFibGVzIHkgc2VsZWN0b3JlcyAqL1xuY29uc3QgZXhwZW5zZXNMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2V4cGVuc2VzIHVsYCk7XG5sZXQgYnVkZ2V0O1xuXG4vKiBFdmVudG9zICovXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKGBET01Db250ZW50TG9hZGVkYCwgc3RhcnRBcHApO1xuXG5mdW5jdGlvbiBzdGFydEFwcCgpIHtcbiAgcmVxdWVzdE5hbWUoKTtcbiAgcmVxdWVzdEJ1ZGdldCgpO1xuICBidWRnZXRGb3JtRXZlbnRzKCk7XG59XG5cbi8qIENsYXNlcyAqL1xuY2xhc3MgQnVkZ2V0IHtcbiAgY29uc3RydWN0b3IoYnVkZ2V0VG90YWwpIHtcbiAgICB0aGlzLmJ1ZGdldFRvdGFsID0gYnVkZ2V0VG90YWw7XG4gICAgdGhpcy5idWRnZXRBdmFpbGFibGUgPSBidWRnZXRUb3RhbDtcbiAgICB0aGlzLmJ1ZGdldFNwZW50ID0gMDtcbiAgICB0aGlzLmV4cGVuc2VzID0gW107XG4gIH1cblxuICBuZXdFeHBlbnNlcyhleHBlbnNlKSB7XG4gICAgdGhpcy5leHBlbnNlcyA9IFsuLi50aGlzLmV4cGVuc2VzLCBleHBlbnNlXTtcbiAgICB0aGlzLmNhbGN1bGF0ZVNwZW50KCk7XG4gIH1cblxuICBjYWxjdWxhdGVTcGVudCgpIHtcbiAgICB0aGlzLmJ1ZGdldFNwZW50ID0gdGhpcy5leHBlbnNlcy5yZWR1Y2UoXG4gICAgICAodG90YWwsIGV4cGVuc2UpID0+IHRvdGFsICsgZXhwZW5zZS5pbnB1dEFtb3VudCxcbiAgICAgIDBcbiAgICApO1xuICAgIHRoaXMuYnVkZ2V0QXZhaWxhYmxlID0gdGhpcy5idWRnZXRUb3RhbCAtIHRoaXMuYnVkZ2V0U3BlbnQ7XG4gIH1cbn1cblxuY2xhc3MgVXNlckludGVyZmFjZSB7XG4gIGluc2VydE5hbWUodXNlck5hbWUpIHtcbiAgICBjb25zdCBidWRnZXRVc2VyTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBgLmJ1ZGdldF9faGVhZGluZy0tdXNlci1uYW1lYFxuICAgICk7XG5cbiAgICAvLyBJbnNlcnRhciBlbCBub21icmUgZGVsIHVzdWFyaW8gZW4gZWwgSFRNTFxuICAgIGJ1ZGdldFVzZXJOYW1lLnRleHRDb250ZW50ID0gYCR7dXNlck5hbWV9IWA7XG4gIH1cblxuICBpbnNlcnRCdWRnZXQocXVhbnRpdHkpIHtcbiAgICBjb25zdCB7IGJ1ZGdldFRvdGFsLCBidWRnZXRBdmFpbGFibGUsIGJ1ZGdldFNwZW50IH0gPSBxdWFudGl0eTtcblxuICAgIC8vIEZvcm1hdGVhciBlbCB0b3RhbCB5IGRpc3BvbmlibGUgZW4gbW9uZWRhIGxvY2FsIE1YTlxuICAgIGxldCBmb3JtYXR0ZWRUb3RhbCA9IGJ1ZGdldFRvdGFsLnRvTG9jYWxlU3RyaW5nKFwiZXMtTVhcIiwge1xuICAgICAgc3R5bGU6IFwiY3VycmVuY3lcIixcbiAgICAgIGN1cnJlbmN5OiBcIk1YTlwiLFxuICAgIH0pO1xuICAgIGxldCBmb3JtYXR0ZWRBdmFpbGFibGUgPSBidWRnZXRBdmFpbGFibGUudG9Mb2NhbGVTdHJpbmcoXCJlcy1NWFwiLCB7XG4gICAgICBzdHlsZTogXCJjdXJyZW5jeVwiLFxuICAgICAgY3VycmVuY3k6IFwiTVhOXCIsXG4gICAgfSk7XG4gICAgbGV0IGZvcm1hdHRlZFNwZW50ID0gYnVkZ2V0U3BlbnQudG9Mb2NhbGVTdHJpbmcoXCJlcy1NWFwiLCB7XG4gICAgICBzdHlsZTogXCJjdXJyZW5jeVwiLFxuICAgICAgY3VycmVuY3k6IFwiTVhOXCIsXG4gICAgfSk7XG5cbiAgICAvLyBJbnNlcnRhciBlbCB0b3RhbCB5IGRpc3BvbmlibGUgZW4gZWwgSFRNTFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBgI2J1ZGdldENhcmRUb3RhbGBcbiAgICApLnRleHRDb250ZW50ID0gYCR7Zm9ybWF0dGVkVG90YWx9YDtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgYCNidWRnZXRDYXJkQXZhaWxhYmxlYFxuICAgICkudGV4dENvbnRlbnQgPSBgJHtmb3JtYXR0ZWRBdmFpbGFibGV9YDtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgYCNidWRnZXRDYXJkU3BlbnRgXG4gICAgKS50ZXh0Q29udGVudCA9IGAke2Zvcm1hdHRlZFNwZW50fWA7XG4gIH1cblxuICBwcmludEFsZXJ0cyhtZXNzYWdlLCB0eXBlQWxlcnQpIHtcbiAgICAvLyBDcmVhciBlbCBkaXYgZGUgbGEgYWxlcnRhXG4gICAgY29uc3QgYWxlcnRNZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgcGApO1xuICAgIGFsZXJ0TWVzc2FnZS5jbGFzc0xpc3QuYWRkKGBhbGVydGApO1xuXG4gICAgLy8gQWdyZWdhciBlbCBtZW5zYWplIHkgZWwgdGlwbyBkZSBhbGVydGEgYWwgcCBkZSBsYSBhbGVydGFcbiAgICBpZiAodHlwZUFsZXJ0ID09PSBgZXJyb3JgKSB7XG4gICAgICBhbGVydE1lc3NhZ2UuY2xhc3NMaXN0LmFkZChgYWxlcnQtLWVycm9yYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFsZXJ0TWVzc2FnZS5jbGFzc0xpc3QuYWRkKGBhbGVydC0tc3VjY2Vzc2ApO1xuICAgIH1cblxuICAgIC8vIEFncmVnYXIgYWwgZGl2IGVsIG1lbnNhamVcbiAgICBhbGVydE1lc3NhZ2UudGV4dENvbnRlbnQgPSBtZXNzYWdlO1xuXG4gICAgLy8gSW5zZXJ0YXIgbGEgYWxlcnRhIGFsIEhUTUxcbiAgICBjb25zdCBidWRnZXRGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2J1ZGdldEZvcm1gKTtcbiAgICBidWRnZXRGb3JtLmFwcGVuZENoaWxkKGFsZXJ0TWVzc2FnZSk7XG5cbiAgICAvLyBFbGltaW5hciBsYSBhbGVydGEgZGVzcHXDqXMgZGUgMyBzZWd1bmRvc1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgYWxlcnRNZXNzYWdlLnJlbW92ZSgpO1xuICAgIH0sIDMwMDApO1xuICB9XG5cbiAgYWRkRXhwZW5zZUxpc3QoZXhwZW5zZXMpIHtcbiAgICAvLyBMaW1waWFyIGxhIGxpc3RhIGRlIGdhc3Rvc1xuICAgIHRoaXMuY2xlYW5IdG1sKCk7XG5cbiAgICAvLyBJdGVyYXIgbG9zIGdhc3Rvc1xuICAgIGV4cGVuc2VzLmZvckVhY2goKGV4cGVuc2UpID0+IHtcbiAgICAgIGNvbnN0IHsgaW5wdXROYW1lLCBpbnB1dEFtb3VudCwgc2VsZWN0ZWRDYXRlZ29yeSwgaWQgfSA9IGV4cGVuc2U7XG5cbiAgICAgIC8vIEZvcm1hdGVhciBsYSBjYW50aWRhZFxuICAgICAgY29uc3QgZm9ybWF0dGVkQW1vdW50ID0gaW5wdXRBbW91bnQudG9Mb2NhbGVTdHJpbmcoXCJlcy1NWFwiLCB7XG4gICAgICAgIHN0eWxlOiBcImN1cnJlbmN5XCIsXG4gICAgICAgIGN1cnJlbmN5OiBcIk1YTlwiLFxuICAgICAgfSk7XG5cbiAgICAgIC8vIENyZWFyIGVsIExpXG4gICAgICBjb25zdCBuZXdFeHBlbnNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgbGlgKTtcbiAgICAgIG5ld0V4cGVuc2UuY2xhc3NOYW1lID0gYGV4cGVuc2UtaXRlbWA7XG4gICAgICBuZXdFeHBlbnNlLmRhdGFzZXQuaWQgPSBpZDtcbiAgICAgIG5ld0V4cGVuc2UuZGF0YXNldC5jYXRlZ29yeSA9IHNlbGVjdGVkQ2F0ZWdvcnk7XG5cbiAgICAgIC8vIEFncmVnYXIgZWwgSFRNTFxuICAgICAgbmV3RXhwZW5zZS5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJleHBlbnNlLWl0ZW1fX3RleHRzXCI+XG4gICAgICAgICAgPHAgY2xhc3M9XCJleHBlbnNlLWl0ZW1fX2Rlc2NyaXB0aW9uXCI+JHtpbnB1dE5hbWV9PC9wPlxuICAgICAgICAgIDxwIGNsYXNzPVwiZXhwZW5zZS1pdGVtX19wcmljZVwiPiR7Zm9ybWF0dGVkQW1vdW50fTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICBgO1xuXG4gICAgICAvLyBCb3TDs24gcGFyYSBib3JyYXIgZWwgZ2FzdG9cbiAgICAgIGNvbnN0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGJ1dHRvbmApO1xuICAgICAgZGVsZXRlQnRuLmNsYXNzTGlzdC5hZGQoYGV4cGVuc2UtaXRlbV9fYnRuYCk7XG4gICAgICBkZWxldGVCdG4udGV4dENvbnRlbnQgPSBgWGA7XG5cbiAgICAgIC8vIEHDsWFkaXIgZWwgYm90w7NuIGFsIExpXG4gICAgICBuZXdFeHBlbnNlLmFwcGVuZENoaWxkKGRlbGV0ZUJ0bik7XG5cbiAgICAgIC8vIEHDsWFkaXIgZWwgTGkgYWwgVWxcbiAgICAgIGV4cGVuc2VzTGlzdC5hcHBlbmRDaGlsZChuZXdFeHBlbnNlKTtcbiAgICB9KTtcbiAgfVxuXG4gIGNsZWFuSHRtbCgpIHtcbiAgICB3aGlsZSAoZXhwZW5zZXNMaXN0LmZpcnN0Q2hpbGQpIHtcbiAgICAgIGV4cGVuc2VzTGlzdC5yZW1vdmVDaGlsZChleHBlbnNlc0xpc3QuZmlyc3RDaGlsZCk7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlQnVkZ2V0KGF2YWlsYWJsZSwgc3BlbnQpe1xuICAgIGxldCBmb3JtYXR0ZWRBdmFpbGFibGUgPSBhdmFpbGFibGUudG9Mb2NhbGVTdHJpbmcoXCJlcy1NWFwiLCB7XG4gICAgICBzdHlsZTogXCJjdXJyZW5jeVwiLFxuICAgICAgY3VycmVuY3k6IFwiTVhOXCIsXG4gICAgfSk7XG4gICAgbGV0IGZvcm1hdHRlZFNwZW50ID0gc3BlbnQudG9Mb2NhbGVTdHJpbmcoXCJlcy1NWFwiLCB7XG4gICAgICBzdHlsZTogXCJjdXJyZW5jeVwiLFxuICAgICAgY3VycmVuY3k6IFwiTVhOXCIsXG4gICAgfSk7XG5cbiAgICAvLyBBY3R1YWxpemFyIGVsIGRpc3BvbmlibGUgeSBlbCBnYXN0YWRvIGVuIGVsIEhUTUxcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgYCNidWRnZXRDYXJkQXZhaWxhYmxlYFxuICAgICkudGV4dENvbnRlbnQgPSBgJHtmb3JtYXR0ZWRBdmFpbGFibGV9YDtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgYCNidWRnZXRDYXJkU3BlbnRgXG4gICAgKS50ZXh0Q29udGVudCA9IGAke2Zvcm1hdHRlZFNwZW50fWA7XG4gIH1cbn1cblxuLy8gSW5zdGFuY2lhciBsYSBVSVxuY29uc3QgdXNlckludGVyZmFjZSA9IG5ldyBVc2VySW50ZXJmYWNlKCk7XG5cbi8qIEZ1bmNpb25lcyAqL1xuZnVuY3Rpb24gcmVxdWVzdE5hbWUoKSB7XG4gIGxldCB1c2VyTmFtZTtcblxuICAvLyBTb2xpY2l0YXIgZWwgbm9tYnJlIGRlbCB1c3VhcmlvIGhhc3RhIHF1ZSBzZSBpbmdyZXNlIHVuIHZhbG9yIHbDoWxpZG9cbiAgZG8ge1xuICAgIHVzZXJOYW1lID0gcHJvbXB0KGDCv0N1w6FsIGVzIHR1IG5vbWJyZT9gKTtcblxuICAgIC8vIFZhbGlkYXIgZWwgbm9tYnJlXG4gICAgaWYgKCF1c2VyTmFtZSkge1xuICAgICAgYWxlcnQoYFBvciBmYXZvciwgaW50cm9kdWNlIHVuIG5vbWJyZSB2w6FsaWRvLmApO1xuICAgIH1cbiAgfSB3aGlsZSAoIXVzZXJOYW1lKTtcblxuICAvLyBMbGFtYXIgYWwgbcOpdG9kbyBwYXJhIGluc2VydGFyIGVsIG5vbWJyZSBlbiBsYSBVSVxuICB1c2VySW50ZXJmYWNlLmluc2VydE5hbWUodXNlck5hbWUpO1xufVxuXG5mdW5jdGlvbiByZXF1ZXN0QnVkZ2V0KCkge1xuICBjb25zdCB1c2VyQnVkZ2V0ID0gTnVtYmVyKHByb21wdChgwr9DdcOhbCBlcyB0dSBwcmVzdXB1ZXN0bz9gKSk7XG4gIGNvbnN0IHZvaWRWYWx1ZSA9IGBgO1xuXG4gIGlmIChcbiAgICB1c2VyQnVkZ2V0ID09PSB2b2lkVmFsdWUgfHxcbiAgICB1c2VyQnVkZ2V0ID09PSBudWxsIHx8XG4gICAgaXNOYU4odXNlckJ1ZGdldCkgfHxcbiAgICB1c2VyQnVkZ2V0IDw9IDBcbiAgKSB7XG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICB9XG5cbiAgLy8gQ3JlYXIgaW5zdGFuY2lhIGRlIFwiQnVkZ2V0XCIgeSBlc3RhYmxlY2VybG9cbiAgYnVkZ2V0ID0gbmV3IEJ1ZGdldCh1c2VyQnVkZ2V0KTtcblxuICAvLyBMbGFtYXIgYWwgbcOpdG9kbyBwYXJhIGluc2VydGFyIGVsIHByZXN1cHVlc3RvIGVuIGxhIFVJXG4gIHVzZXJJbnRlcmZhY2UuaW5zZXJ0QnVkZ2V0KGJ1ZGdldCk7XG59XG5cbmZ1bmN0aW9uIGJ1ZGdldEZvcm1FdmVudHMoKSB7XG4gIC8vIE9idGVuZXIgZWwgZm9ybXVsYXJpbyB5IHN1cyBldmVudG9zXG4gIGNvbnN0IGJ1ZGdldEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjYnVkZ2V0Rm9ybWApO1xuICBidWRnZXRGb3JtLmFkZEV2ZW50TGlzdGVuZXIoYHN1Ym1pdGAsIGFkZEV4cGVuc2UpO1xufVxuXG5mdW5jdGlvbiBhZGRFeHBlbnNlKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gIC8vIE9idGVuZXIgbG9zIHZhbG9yZXMgZGVsIGZvcm11bGFyaW9cbiAgY29uc3QgaW5wdXROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2J1ZGdldEZvcm1OYW1lYCkudmFsdWU7XG4gIGNvbnN0IGlucHV0QW1vdW50ID0gTnVtYmVyKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNidWRnZXRGb3JtQW1vdW50YCkudmFsdWUpO1xuICBjb25zdCBzZWxlY3RlZENhdGVnb3J5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2J1ZGdldEZvcm1DYXRlZ29yeWApLnZhbHVlO1xuICBsZXQgdm9pZFZhbHVlID0gYGA7XG5cbiAgLy8gVmFsaWRhciBxdWUgbmluZ3VubyBkZSBsb3MgY2FtcG9zIGVzdMOpIHZhY8Otb1xuICBpZiAoXG4gICAgaW5wdXROYW1lID09PSB2b2lkVmFsdWUgfHxcbiAgICBpbnB1dEFtb3VudCA9PT0gdm9pZFZhbHVlIHx8XG4gICAgc2VsZWN0ZWRDYXRlZ29yeSA9PT0gdm9pZFZhbHVlXG4gICkge1xuICAgIHVzZXJJbnRlcmZhY2UucHJpbnRBbGVydHMoYFRvZG9zIGxvcyBjYW1wb3Mgc29uIG9ibGlnYXRvcmlvc2AsIGBlcnJvcmApO1xuXG4gICAgcmV0dXJuO1xuICB9IGVsc2UgaWYgKGlucHV0QW1vdW50IDw9IDAgfHwgaXNOYU4oaW5wdXRBbW91bnQpKSB7XG4gICAgdXNlckludGVyZmFjZS5wcmludEFsZXJ0cyhgQ2FudGlkYWQgbm8gdmFsaWRhYCwgYGVycm9yYCk7XG5cbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBDcmVhciBvYmpldG8gY29uIGVsIGdhc3RvXG4gIGNvbnN0IGV4cGVuc2UgPSB7IGlucHV0TmFtZSwgaW5wdXRBbW91bnQsIHNlbGVjdGVkQ2F0ZWdvcnksIGlkOiBEYXRlLm5vdygpIH07XG5cbiAgLy8gQcOxYWRpciBlbCBnYXN0byBhIGxhIGxpc3RhIHkgYWwgcHJlc3VwdWVzdG9cbiAgYnVkZ2V0Lm5ld0V4cGVuc2VzKGV4cGVuc2UpO1xuXG4gIC8vIEltcHJpbWlyIHVuYSBhbGVydGEgZGUgZXhpdG9cbiAgdXNlckludGVyZmFjZS5wcmludEFsZXJ0cyhgU2UgYWdyZWfDsyBjb3JyZWN0YW1lbnRlYCwgYHN1Y2Nlc3NgKTtcblxuICAvLyBJbXByaW1pciBlbCBnYXN0byBlbiBlbCBIVE1MXG4gIGNvbnN0IHsgZXhwZW5zZXMsIGJ1ZGdldEF2YWlsYWJsZSwgYnVkZ2V0U3BlbnQgfSA9IGJ1ZGdldDtcbiAgdXNlckludGVyZmFjZS5hZGRFeHBlbnNlTGlzdChleHBlbnNlcyk7XG5cbiAgLy8gQWN0dWFsaXphciBlbCBwcmVzdXB1ZXN0byBlbiBsYSBVSVxuICB1c2VySW50ZXJmYWNlLnVwZGF0ZUJ1ZGdldChidWRnZXRBdmFpbGFibGUsIGJ1ZGdldFNwZW50KTtcblxuICAvLyBMaW1waWFyIGxvcyBjYW1wb3MgZGVsIGZvcm11bGFyaW9cbiAgY29uc3QgYnVkZ2V0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNidWRnZXRGb3JtYCk7XG4gIGJ1ZGdldEZvcm0ucmVzZXQoKTtcbn1cbiJdfQ==
