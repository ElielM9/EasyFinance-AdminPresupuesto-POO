const expensesList=document.querySelector("#expenses ul");let budget;function startApp(){requestName(),requestBudget(),budgetFormEvents()}document.addEventListener("DOMContentLoaded",startApp);class Budget{constructor(e){this.budgetTotal=e,this.budgetAvailable=e,this.budgetSpent=0,this.expenses=[]}newExpenses(e){e.inputAmount>this.budgetAvailable?userInterface.printAlerts("No tienes fondos suficientes","error"):(this.expenses=[...this.expenses,e],this.calculateSpent(),userInterface.printAlerts("Se agregó correctamente","success"))}calculateSpent(){this.budgetSpent=this.expenses.reduce((e,t)=>e+t.inputAmount,0),this.budgetAvailable=this.budgetTotal-this.budgetSpent}deleteExpense(e){const t=this.expenses.filter(t=>t.id!==e);this.expenses=t,this.calculateSpent()}}class UserInterface{insertName(e){document.querySelector(".budget__heading--user-name").textContent=e+"!"}insertBudget(e){const{budgetTotal:t,budgetAvailable:n,budgetSpent:s}=e;let r=t.toLocaleString("es-MX",{style:"currency",currency:"MXN"}),u=n.toLocaleString("es-MX",{style:"currency",currency:"MXN"}),o=s.toLocaleString("es-MX",{style:"currency",currency:"MXN"});document.querySelector("#budgetCardTotal").textContent=""+r,document.querySelector("#budgetCardAvailable").textContent=""+u,document.querySelector("#budgetCardSpent").textContent=""+o}printAlerts(e,t){const n=document.createElement("p");n.classList.add("alert"),"error"===t?n.classList.add("alert--error"):n.classList.add("alert--success"),n.textContent=e;document.querySelector("#budgetForm").appendChild(n),setTimeout(()=>{n.remove()},3e3)}showExpenseList(e){this.cleanHtml(),e.forEach(e=>{const{inputName:t,inputAmount:n,selectedCategory:s,id:r}=e,u=n.toLocaleString("es-MX",{style:"currency",currency:"MXN"}),o=document.createElement("li");o.className="expense-item",o.dataset.id=r,o.dataset.category=s,o.innerHTML=`\n        <div class="expense-item__texts">\n          <p class="expense-item__description">${t}</p>\n          <p class="expense-item__price">${u}</p>\n        </div>\n      `;const c=document.createElement("button");c.classList.add("expense-item__btn"),c.textContent="X",c.addEventListener("click",()=>{deleteExpense(r)}),o.appendChild(c),expensesList.appendChild(o)})}cleanHtml(){for(;expensesList.firstChild;)expensesList.removeChild(expensesList.firstChild)}updateAvailableBudget(e,t){let n=e.toLocaleString("es-MX",{style:"currency",currency:"MXN"}),s=t.toLocaleString("es-MX",{style:"currency",currency:"MXN"});document.querySelector("#budgetCardAvailable").textContent=""+n,document.querySelector("#budgetCardSpent").textContent=""+s}checkBudget(e){const{budgetTotal:t,budgetAvailable:n}=e,s=document.querySelector(".budget-form__btn");n<=0?(userInterface.printAlerts("El presupuesto se ha agotado","error"),s.disabled=!0):s.disabled=!1}}const userInterface=new UserInterface;function requestName(){let e;do{e=prompt("¿Cuál es tu nombre?"),e||alert("Por favor, introduce un nombre válido.")}while(!e);userInterface.insertName(e)}function requestBudget(){const e=Number(prompt("¿Cuál es tu presupuesto?"));(""===e||null===e||isNaN(e)||e<=0)&&window.location.reload(),budget=new Budget(e),userInterface.insertBudget(budget)}function budgetFormEvents(){document.querySelector("#budgetForm").addEventListener("submit",addExpense)}function addExpense(e){e.preventDefault();const t=document.querySelector("#budgetFormName").value,n=Number(document.querySelector("#budgetFormAmount").value),s=document.querySelector("#budgetFormCategory").value;if(""===t||""===n||""===s)return void userInterface.printAlerts("Todos los campos son obligatorios","error");if(n<=0||isNaN(n))return void userInterface.printAlerts("Cantidad no valida","error");const r={inputName:t,inputAmount:n,selectedCategory:s,id:Date.now()};budget.newExpenses(r);const{expenses:u,budgetAvailable:o,budgetSpent:c}=budget;userInterface.showExpenseList(u),userInterface.updateAvailableBudget(o,c),userInterface.checkBudget(budget);document.querySelector("#budgetForm").reset()}function deleteExpense(e){budget.deleteExpense(e);const{expenses:t,budgetAvailable:n,budgetSpent:s}=budget;userInterface.showExpenseList(t),userInterface.updateAvailableBudget(n,s),userInterface.checkBudget(budget)}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiZXhwZW5zZXNMaXN0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYnVkZ2V0Iiwic3RhcnRBcHAiLCJyZXF1ZXN0TmFtZSIsInJlcXVlc3RCdWRnZXQiLCJidWRnZXRGb3JtRXZlbnRzIiwiYWRkRXZlbnRMaXN0ZW5lciIsIkJ1ZGdldCIsIltvYmplY3QgT2JqZWN0XSIsImJ1ZGdldFRvdGFsIiwidGhpcyIsImJ1ZGdldEF2YWlsYWJsZSIsImJ1ZGdldFNwZW50IiwiZXhwZW5zZXMiLCJleHBlbnNlIiwiaW5wdXRBbW91bnQiLCJ1c2VySW50ZXJmYWNlIiwicHJpbnRBbGVydHMiLCJjYWxjdWxhdGVTcGVudCIsInJlZHVjZSIsInRvdGFsIiwiZXhwZW5zZUlkIiwiZmlsdGVyZWRFeHBlbnNlcyIsImZpbHRlciIsImlkIiwiVXNlckludGVyZmFjZSIsInVzZXJOYW1lIiwidGV4dENvbnRlbnQiLCJxdWFudGl0eSIsImZvcm1hdHRlZFRvdGFsIiwidG9Mb2NhbGVTdHJpbmciLCJzdHlsZSIsImN1cnJlbmN5IiwiZm9ybWF0dGVkQXZhaWxhYmxlIiwiZm9ybWF0dGVkU3BlbnQiLCJtZXNzYWdlIiwidHlwZUFsZXJ0IiwiYWxlcnRNZXNzYWdlIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsImFwcGVuZENoaWxkIiwic2V0VGltZW91dCIsInJlbW92ZSIsImNsZWFuSHRtbCIsImZvckVhY2giLCJpbnB1dE5hbWUiLCJzZWxlY3RlZENhdGVnb3J5IiwiZm9ybWF0dGVkQW1vdW50IiwiZXhwZW5zZUl0ZW0iLCJjbGFzc05hbWUiLCJkYXRhc2V0IiwiY2F0ZWdvcnkiLCJpbm5lckhUTUwiLCJkZWxldGVCdG4iLCJkZWxldGVFeHBlbnNlIiwiZmlyc3RDaGlsZCIsInJlbW92ZUNoaWxkIiwiYXZhaWxhYmxlIiwic3BlbnQiLCJidWRnZXRPYmoiLCJidWRnZXRGb3JtQnRuIiwiZGlzYWJsZWQiLCJwcm9tcHQiLCJhbGVydCIsImluc2VydE5hbWUiLCJ1c2VyQnVkZ2V0IiwiTnVtYmVyIiwiaXNOYU4iLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlbG9hZCIsImluc2VydEJ1ZGdldCIsImFkZEV4cGVuc2UiLCJlIiwicHJldmVudERlZmF1bHQiLCJ2YWx1ZSIsIkRhdGUiLCJub3ciLCJuZXdFeHBlbnNlcyIsInNob3dFeHBlbnNlTGlzdCIsInVwZGF0ZUF2YWlsYWJsZUJ1ZGdldCIsImNoZWNrQnVkZ2V0IiwicmVzZXQiXSwibWFwcGluZ3MiOiJBQUNBLE1BQU1BLGFBQWVDLFNBQVNDLGNBQWMsZ0JBQzVDLElBQUlDLE9BS0osU0FBU0MsV0FDUEMsY0FDQUMsZ0JBQ0FDLG1CQUxGTixTQUFTTyxpQkFBaUIsbUJBQW9CSixVQVM5QyxNQUFNSyxPQUNKQyxZQUFZQyxHQUNWQyxLQUFLRCxZQUFjQSxFQUNuQkMsS0FBS0MsZ0JBQWtCRixFQUN2QkMsS0FBS0UsWUFBYyxFQUNuQkYsS0FBS0csU0FBVyxHQUdsQkwsWUFBWU0sR0FFTkEsRUFBUUMsWUFBY0wsS0FBS0MsZ0JBQzdCSyxjQUFjQyxZQUFZLCtCQUFnQyxVQU01RFAsS0FBS0csU0FBVyxJQUFJSCxLQUFLRyxTQUFVQyxHQUNuQ0osS0FBS1EsaUJBR0xGLGNBQWNDLFlBQVksMEJBQTJCLFlBR3ZEVCxpQkFDRUUsS0FBS0UsWUFBY0YsS0FBS0csU0FBU00sT0FDL0IsQ0FBQ0MsRUFBT04sSUFBWU0sRUFBUU4sRUFBUUMsWUFDcEMsR0FFRkwsS0FBS0MsZ0JBQWtCRCxLQUFLRCxZQUFjQyxLQUFLRSxZQUdqREosY0FBY2EsR0FFWixNQUFNQyxFQUFtQlosS0FBS0csU0FBU1UsT0FDcENULEdBQVlBLEVBQVFVLEtBQU9ILEdBSTlCWCxLQUFLRyxTQUFXUyxFQUdoQlosS0FBS1Esa0JBSVQsTUFBTU8sY0FDSmpCLFdBQVdrQixHQUNjM0IsU0FBU0MsY0FDOUIsK0JBSWEyQixZQUFpQkQsRUFBSCxJQUcvQmxCLGFBQWFvQixHQUNYLE1BQU1uQixZQUFFQSxFQUFXRSxn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QW1CNEUsTUFDdEQ3RCxFQUFjb0QsT0FBT3BFLFNBQVNDLGNBQWMscUJBQXFCNEUsT0FDakU3QixFQUFtQmhELFNBQVNDLGNBQWMsdUJBQXVCNEUsTUFJdkUsR0FIZ0IsS0FJZDlCLEdBSmMsS0FLZC9CLEdBTGMsS0FNZGdDLEVBSUEsWUFGQS9CLGNBQWNDLFlBQVksb0NBQXFDLFNBRzFELEdBQUlGLEdBQWUsR0FBS3FELE1BQU1yRCxHQUduQyxZQUZBQyxjQUFjQyxZQUFZLHFCQUFzQixTQU1sRCxNQUFNSCxFQUFVLENBQUVnQyxVQUFBQSxFQUFXL0IsWUFBQUEsRUFBYWdDLGlCQUFBQSxFQUFrQnZCLEdBQUlxRCxLQUFLQyxPQUdyRTdFLE9BQU84RSxZQUFZakUsR0FHbkIsTUFBTUQsU0FBRUEsRUFBUUYsZ0JBQUVBLEVBQWVDLFlBQUVBLEdBQWdCWCxPQUduRGUsY0FBY2dFLGdCQUFnQm5FLEdBRzlCRyxjQUFjaUUsc0JBQXNCdEUsRUFBaUJDLEdBR3JESSxjQUFja0UsWUFBWWpGLFFBR1BGLFNBQVNDLGNBQWMsZUFDL0JtRixRQUdiLFNBQVM1QixjQUFjL0IsR0FFckJ2QixPQUFPc0QsY0FBYy9CLEdBR3JCLE1BQU1YLFNBQUVBLEVBQVFGLGdCQUFFQSxFQUFlQyxZQUFFQSxHQUFnQlgsT0FHbkRlLGNBQWNnRSxnQkFBZ0JuRSxHQUc5QkcsY0FBY2lFLHNCQUFzQnRFLEVBQWlCQyxHQUdyREksY0FBY2tFLFlBQVlqRiIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogVmFyaWFibGVzIHkgc2VsZWN0b3JlcyAqL1xuY29uc3QgZXhwZW5zZXNMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2V4cGVuc2VzIHVsYCk7XG5sZXQgYnVkZ2V0O1xuXG4vKiBFdmVudG9zICovXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKGBET01Db250ZW50TG9hZGVkYCwgc3RhcnRBcHApO1xuXG5mdW5jdGlvbiBzdGFydEFwcCgpIHtcbiAgcmVxdWVzdE5hbWUoKTtcbiAgcmVxdWVzdEJ1ZGdldCgpO1xuICBidWRnZXRGb3JtRXZlbnRzKCk7XG59XG5cbi8qIENsYXNlcyAqL1xuY2xhc3MgQnVkZ2V0IHtcbiAgY29uc3RydWN0b3IoYnVkZ2V0VG90YWwpIHtcbiAgICB0aGlzLmJ1ZGdldFRvdGFsID0gYnVkZ2V0VG90YWw7XG4gICAgdGhpcy5idWRnZXRBdmFpbGFibGUgPSBidWRnZXRUb3RhbDtcbiAgICB0aGlzLmJ1ZGdldFNwZW50ID0gMDtcbiAgICB0aGlzLmV4cGVuc2VzID0gW107XG4gIH1cblxuICBuZXdFeHBlbnNlcyhleHBlbnNlKSB7XG4gICAgLy8gVmFsaWRhciBxdWUgZWwgbW9udG8gaW50cm9kdWNpZG8gbm8gc2VhIG1heW9yIGFsIHByZXN1cHVlc3RvIGRpc3BvbmlibGVcbiAgICBpZiAoZXhwZW5zZS5pbnB1dEFtb3VudCA+IHRoaXMuYnVkZ2V0QXZhaWxhYmxlKSB7XG4gICAgICB1c2VySW50ZXJmYWNlLnByaW50QWxlcnRzKGBObyB0aWVuZXMgZm9uZG9zIHN1ZmljaWVudGVzYCwgYGVycm9yYCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBBw7FhZGlyIGVsIGdhc3RvIGEgbGEgbGlzdGEgZGUgZ2FzdG9zXG4gICAgdGhpcy5leHBlbnNlcyA9IFsuLi50aGlzLmV4cGVuc2VzLCBleHBlbnNlXTtcbiAgICB0aGlzLmNhbGN1bGF0ZVNwZW50KCk7XG5cbiAgICAvLyBJbXByaW1pciB1bmEgYWxlcnRhIGRlIGV4aXRvXG4gICAgdXNlckludGVyZmFjZS5wcmludEFsZXJ0cyhgU2UgYWdyZWfDsyBjb3JyZWN0YW1lbnRlYCwgYHN1Y2Nlc3NgKTtcbiAgfVxuXG4gIGNhbGN1bGF0ZVNwZW50KCkge1xuICAgIHRoaXMuYnVkZ2V0U3BlbnQgPSB0aGlzLmV4cGVuc2VzLnJlZHVjZShcbiAgICAgICh0b3RhbCwgZXhwZW5zZSkgPT4gdG90YWwgKyBleHBlbnNlLmlucHV0QW1vdW50LFxuICAgICAgMFxuICAgICk7XG4gICAgdGhpcy5idWRnZXRBdmFpbGFibGUgPSB0aGlzLmJ1ZGdldFRvdGFsIC0gdGhpcy5idWRnZXRTcGVudDtcbiAgfVxuXG4gIGRlbGV0ZUV4cGVuc2UoZXhwZW5zZUlkKSB7XG4gICAgLy8gRmlsdHJhciBsb3MgZ2FzdG9zIHF1ZSBubyB0aWVuZW4gZWwgaWQgZGUgZXhwZW5zZXNJZFxuICAgIGNvbnN0IGZpbHRlcmVkRXhwZW5zZXMgPSB0aGlzLmV4cGVuc2VzLmZpbHRlcihcbiAgICAgIChleHBlbnNlKSA9PiBleHBlbnNlLmlkICE9PSBleHBlbnNlSWRcbiAgICApO1xuXG4gICAgLy8gQWN0dWFsaXphciBlbCBhcnJheSBkZSBnYXN0b3NcbiAgICB0aGlzLmV4cGVuc2VzID0gZmlsdGVyZWRFeHBlbnNlcztcblxuICAgIC8vIFJlY2FsY3VsYXIgZWwgcHJlc3VwdWVzdG8gZGlzcG9uaWJsZSB5IGdhc3RhZG9cbiAgICB0aGlzLmNhbGN1bGF0ZVNwZW50KCk7XG4gIH1cbn1cblxuY2xhc3MgVXNlckludGVyZmFjZSB7XG4gIGluc2VydE5hbWUodXNlck5hbWUpIHtcbiAgICBjb25zdCBidWRnZXRVc2VyTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBgLmJ1ZGdldF9faGVhZGluZy0tdXNlci1uYW1lYFxuICAgICk7XG5cbiAgICAvLyBJbnNlcnRhciBlbCBub21icmUgZGVsIHVzdWFyaW8gZW4gZWwgSFRNTFxuICAgIGJ1ZGdldFVzZXJOYW1lLnRleHRDb250ZW50ID0gYCR7dXNlck5hbWV9IWA7XG4gIH1cblxuICBpbnNlcnRCdWRnZXQocXVhbnRpdHkpIHtcbiAgICBjb25zdCB7IGJ1ZGdldFRvdGFsLCBidWRnZXRBdmFpbGFibGUsIGJ1ZGdldFNwZW50IH0gPSBxdWFudGl0eTtcblxuICAgIC8vIEZvcm1hdGVhciBlbCB0b3RhbCB5IGRpc3BvbmlibGUgZW4gbW9uZWRhIGxvY2FsIE1YTlxuICAgIGxldCBmb3JtYXR0ZWRUb3RhbCA9IGJ1ZGdldFRvdGFsLnRvTG9jYWxlU3RyaW5nKFwiZXMtTVhcIiwge1xuICAgICAgc3R5bGU6IFwiY3VycmVuY3lcIixcbiAgICAgIGN1cnJlbmN5OiBcIk1YTlwiLFxuICAgIH0pO1xuICAgIGxldCBmb3JtYXR0ZWRBdmFpbGFibGUgPSBidWRnZXRBdmFpbGFibGUudG9Mb2NhbGVTdHJpbmcoXCJlcy1NWFwiLCB7XG4gICAgICBzdHlsZTogXCJjdXJyZW5jeVwiLFxuICAgICAgY3VycmVuY3k6IFwiTVhOXCIsXG4gICAgfSk7XG4gICAgbGV0IGZvcm1hdHRlZFNwZW50ID0gYnVkZ2V0U3BlbnQudG9Mb2NhbGVTdHJpbmcoXCJlcy1NWFwiLCB7XG4gICAgICBzdHlsZTogXCJjdXJyZW5jeVwiLFxuICAgICAgY3VycmVuY3k6IFwiTVhOXCIsXG4gICAgfSk7XG5cbiAgICAvLyBJbnNlcnRhciBlbCB0b3RhbCB5IGRpc3BvbmlibGUgZW4gZWwgSFRNTFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBgI2J1ZGdldENhcmRUb3RhbGBcbiAgICApLnRleHRDb250ZW50ID0gYCR7Zm9ybWF0dGVkVG90YWx9YDtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgYCNidWRnZXRDYXJkQXZhaWxhYmxlYFxuICAgICkudGV4dENvbnRlbnQgPSBgJHtmb3JtYXR0ZWRBdmFpbGFibGV9YDtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgYCNidWRnZXRDYXJkU3BlbnRgXG4gICAgKS50ZXh0Q29udGVudCA9IGAke2Zvcm1hdHRlZFNwZW50fWA7XG4gIH1cblxuICBwcmludEFsZXJ0cyhtZXNzYWdlLCB0eXBlQWxlcnQpIHtcbiAgICAvLyBDcmVhciBlbCBkaXYgZGUgbGEgYWxlcnRhXG4gICAgY29uc3QgYWxlcnRNZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgcGApO1xuICAgIGFsZXJ0TWVzc2FnZS5jbGFzc0xpc3QuYWRkKGBhbGVydGApO1xuXG4gICAgLy8gQWdyZWdhciBlbCBtZW5zYWplIHkgZWwgdGlwbyBkZSBhbGVydGEgYWwgcCBkZSBsYSBhbGVydGFcbiAgICBpZiAodHlwZUFsZXJ0ID09PSBgZXJyb3JgKSB7XG4gICAgICBhbGVydE1lc3NhZ2UuY2xhc3NMaXN0LmFkZChgYWxlcnQtLWVycm9yYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFsZXJ0TWVzc2FnZS5jbGFzc0xpc3QuYWRkKGBhbGVydC0tc3VjY2Vzc2ApO1xuICAgIH1cblxuICAgIC8vIEFncmVnYXIgYWwgZGl2IGVsIG1lbnNhamVcbiAgICBhbGVydE1lc3NhZ2UudGV4dENvbnRlbnQgPSBtZXNzYWdlO1xuXG4gICAgLy8gSW5zZXJ0YXIgbGEgYWxlcnRhIGFsIEhUTUxcbiAgICBjb25zdCBidWRnZXRGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2J1ZGdldEZvcm1gKTtcbiAgICBidWRnZXRGb3JtLmFwcGVuZENoaWxkKGFsZXJ0TWVzc2FnZSk7XG5cbiAgICAvLyBFbGltaW5hciBsYSBhbGVydGEgZGVzcHXDqXMgZGUgMyBzZWd1bmRvc1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgYWxlcnRNZXNzYWdlLnJlbW92ZSgpO1xuICAgIH0sIDMwMDApO1xuICB9XG5cbiAgc2hvd0V4cGVuc2VMaXN0KGV4cGVuc2VzKSB7XG4gICAgLy8gTGltcGlhciBsYSBsaXN0YSBkZSBnYXN0b3NcbiAgICB0aGlzLmNsZWFuSHRtbCgpO1xuXG4gICAgLy8gSXRlcmFyIGxvcyBnYXN0b3NcbiAgICBleHBlbnNlcy5mb3JFYWNoKChleHBlbnNlKSA9PiB7XG4gICAgICBjb25zdCB7IGlucHV0TmFtZSwgaW5wdXRBbW91bnQsIHNlbGVjdGVkQ2F0ZWdvcnksIGlkIH0gPSBleHBlbnNlO1xuXG4gICAgICAvLyBGb3JtYXRlYXIgbGEgY2FudGlkYWRcbiAgICAgIGNvbnN0IGZvcm1hdHRlZEFtb3VudCA9IGlucHV0QW1vdW50LnRvTG9jYWxlU3RyaW5nKFwiZXMtTVhcIiwge1xuICAgICAgICBzdHlsZTogXCJjdXJyZW5jeVwiLFxuICAgICAgICBjdXJyZW5jeTogXCJNWE5cIixcbiAgICAgIH0pO1xuXG4gICAgICAvLyBDcmVhciBlbCBMaVxuICAgICAgY29uc3QgZXhwZW5zZUl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBsaWApO1xuICAgICAgZXhwZW5zZUl0ZW0uY2xhc3NOYW1lID0gYGV4cGVuc2UtaXRlbWA7XG4gICAgICBleHBlbnNlSXRlbS5kYXRhc2V0LmlkID0gaWQ7XG4gICAgICBleHBlbnNlSXRlbS5kYXRhc2V0LmNhdGVnb3J5ID0gc2VsZWN0ZWRDYXRlZ29yeTtcblxuICAgICAgLy8gQWdyZWdhciBlbCBIVE1MXG4gICAgICBleHBlbnNlSXRlbS5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJleHBlbnNlLWl0ZW1fX3RleHRzXCI+XG4gICAgICAgICAgPHAgY2xhc3M9XCJleHBlbnNlLWl0ZW1fX2Rlc2NyaXB0aW9uXCI+JHtpbnB1dE5hbWV9PC9wPlxuICAgICAgICAgIDxwIGNsYXNzPVwiZXhwZW5zZS1pdGVtX19wcmljZVwiPiR7Zm9ybWF0dGVkQW1vdW50fTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICBgO1xuXG4gICAgICAvLyBCb3TDs24gcGFyYSBib3JyYXIgZWwgZ2FzdG9cbiAgICAgIGNvbnN0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGJ1dHRvbmApO1xuICAgICAgZGVsZXRlQnRuLmNsYXNzTGlzdC5hZGQoYGV4cGVuc2UtaXRlbV9fYnRuYCk7XG4gICAgICBkZWxldGVCdG4udGV4dENvbnRlbnQgPSBgWGA7XG4gICAgICBkZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcihgY2xpY2tgLCAoKSA9PiB7XG4gICAgICAgIGRlbGV0ZUV4cGVuc2UoaWQpO1xuICAgICAgfSk7XG5cbiAgICAgIC8vIEHDsWFkaXIgZWwgYm90w7NuIGFsIExpXG4gICAgICBleHBlbnNlSXRlbS5hcHBlbmRDaGlsZChkZWxldGVCdG4pO1xuXG4gICAgICAvLyBBw7FhZGlyIGVsIExpIGFsIFVsXG4gICAgICBleHBlbnNlc0xpc3QuYXBwZW5kQ2hpbGQoZXhwZW5zZUl0ZW0pO1xuICAgIH0pO1xuICB9XG5cbiAgY2xlYW5IdG1sKCkge1xuICAgIHdoaWxlIChleHBlbnNlc0xpc3QuZmlyc3RDaGlsZCkge1xuICAgICAgZXhwZW5zZXNMaXN0LnJlbW92ZUNoaWxkKGV4cGVuc2VzTGlzdC5maXJzdENoaWxkKTtcbiAgICB9XG4gIH1cblxuICB1cGRhdGVBdmFpbGFibGVCdWRnZXQoYXZhaWxhYmxlLCBzcGVudCkge1xuICAgIGxldCBmb3JtYXR0ZWRBdmFpbGFibGUgPSBhdmFpbGFibGUudG9Mb2NhbGVTdHJpbmcoXCJlcy1NWFwiLCB7XG4gICAgICBzdHlsZTogXCJjdXJyZW5jeVwiLFxuICAgICAgY3VycmVuY3k6IFwiTVhOXCIsXG4gICAgfSk7XG4gICAgbGV0IGZvcm1hdHRlZFNwZW50ID0gc3BlbnQudG9Mb2NhbGVTdHJpbmcoXCJlcy1NWFwiLCB7XG4gICAgICBzdHlsZTogXCJjdXJyZW5jeVwiLFxuICAgICAgY3VycmVuY3k6IFwiTVhOXCIsXG4gICAgfSk7XG5cbiAgICAvLyBBY3R1YWxpemFyIGVsIGRpc3BvbmlibGUgeSBlbCBnYXN0YWRvIGVuIGVsIEhUTUxcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgYCNidWRnZXRDYXJkQXZhaWxhYmxlYFxuICAgICkudGV4dENvbnRlbnQgPSBgJHtmb3JtYXR0ZWRBdmFpbGFibGV9YDtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgYCNidWRnZXRDYXJkU3BlbnRgXG4gICAgKS50ZXh0Q29udGVudCA9IGAke2Zvcm1hdHRlZFNwZW50fWA7XG4gIH1cblxuICBjaGVja0J1ZGdldChidWRnZXRPYmopIHtcbiAgICBjb25zdCB7IGJ1ZGdldFRvdGFsLCBidWRnZXRBdmFpbGFibGUgfSA9IGJ1ZGdldE9iajtcblxuICAgIC8qICAgaWYgKGJ1ZGdldFRvdGFsIC8gNCA+IGJ1ZGdldEF2YWlsYWJsZSkge1xuICAgICAgY29uc29sZS5sb2coYEdhc3Rhc3RlIGVsIDc1JWApO1xuICAgIH0gZWxzZSBpZiAoYnVkZ2V0VG90YWwgLyAyID4gYnVkZ2V0QXZhaWxhYmxlKSB7XG4gICAgICBjb25zb2xlLmxvZyhgR2FzdGFzdGUgZWwgNTAlYCk7XG4gICAgfSAqL1xuXG4gICAgY29uc3QgYnVkZ2V0Rm9ybUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5idWRnZXQtZm9ybV9fYnRuYCk7XG5cbiAgICAvLyBEZXNhY3RpdmFyIGVsIGJvdMOzbiBkZSBhZ3JlZ2FyIGdhc3RvIHNpIGVsIHByZXN1cHVlc3RvIGVzdMOhIGFnb3RhZG9cbiAgICBpZiAoYnVkZ2V0QXZhaWxhYmxlIDw9IDApIHtcbiAgICAgIHVzZXJJbnRlcmZhY2UucHJpbnRBbGVydHMoYEVsIHByZXN1cHVlc3RvIHNlIGhhIGFnb3RhZG9gLCBgZXJyb3JgKTtcbiAgICAgIGJ1ZGdldEZvcm1CdG4uZGlzYWJsZWQgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBidWRnZXRGb3JtQnRuLmRpc2FibGVkID0gZmFsc2U7XG4gICAgfVxuICB9XG59XG5cbi8vIEluc3RhbmNpYXIgbGEgVUlcbmNvbnN0IHVzZXJJbnRlcmZhY2UgPSBuZXcgVXNlckludGVyZmFjZSgpO1xuXG4vKiBGdW5jaW9uZXMgKi9cbmZ1bmN0aW9uIHJlcXVlc3ROYW1lKCkge1xuICBsZXQgdXNlck5hbWU7XG5cbiAgLy8gU29saWNpdGFyIGVsIG5vbWJyZSBkZWwgdXN1YXJpbyBoYXN0YSBxdWUgc2UgaW5ncmVzZSB1biB2YWxvciB2w6FsaWRvXG4gIGRvIHtcbiAgICB1c2VyTmFtZSA9IHByb21wdChgwr9DdcOhbCBlcyB0dSBub21icmU/YCk7XG5cbiAgICAvLyBWYWxpZGFyIGVsIG5vbWJyZVxuICAgIGlmICghdXNlck5hbWUpIHtcbiAgICAgIGFsZXJ0KGBQb3IgZmF2b3IsIGludHJvZHVjZSB1biBub21icmUgdsOhbGlkby5gKTtcbiAgICB9XG4gIH0gd2hpbGUgKCF1c2VyTmFtZSk7XG5cbiAgLy8gTGxhbWFyIGFsIG3DqXRvZG8gcGFyYSBpbnNlcnRhciBlbCBub21icmUgZW4gbGEgVUlcbiAgdXNlckludGVyZmFjZS5pbnNlcnROYW1lKHVzZXJOYW1lKTtcbn1cblxuZnVuY3Rpb24gcmVxdWVzdEJ1ZGdldCgpIHtcbiAgY29uc3QgdXNlckJ1ZGdldCA9IE51bWJlcihwcm9tcHQoYMK/Q3XDoWwgZXMgdHUgcHJlc3VwdWVzdG8/YCkpO1xuICBjb25zdCB2b2lkVmFsdWUgPSBgYDtcblxuICBpZiAoXG4gICAgdXNlckJ1ZGdldCA9PT0gdm9pZFZhbHVlIHx8XG4gICAgdXNlckJ1ZGdldCA9PT0gbnVsbCB8fFxuICAgIGlzTmFOKHVzZXJCdWRnZXQpIHx8XG4gICAgdXNlckJ1ZGdldCA8PSAwXG4gICkge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgfVxuXG4gIC8vIENyZWFyIGluc3RhbmNpYSBkZSBcIkJ1ZGdldFwiIHkgZXN0YWJsZWNlcmxvXG4gIGJ1ZGdldCA9IG5ldyBCdWRnZXQodXNlckJ1ZGdldCk7XG5cbiAgLy8gTGxhbWFyIGFsIG3DqXRvZG8gcGFyYSBpbnNlcnRhciBlbCBwcmVzdXB1ZXN0byBlbiBsYSBVSVxuICB1c2VySW50ZXJmYWNlLmluc2VydEJ1ZGdldChidWRnZXQpO1xufVxuXG5mdW5jdGlvbiBidWRnZXRGb3JtRXZlbnRzKCkge1xuICAvLyBPYnRlbmVyIGVsIGZvcm11bGFyaW8geSBzdXMgZXZlbnRvc1xuICBjb25zdCBidWRnZXRGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2J1ZGdldEZvcm1gKTtcbiAgYnVkZ2V0Rm9ybS5hZGRFdmVudExpc3RlbmVyKGBzdWJtaXRgLCBhZGRFeHBlbnNlKTtcbn1cblxuZnVuY3Rpb24gYWRkRXhwZW5zZShlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcblxuICAvLyBPYnRlbmVyIGxvcyB2YWxvcmVzIGRlbCBmb3JtdWxhcmlvXG4gIGNvbnN0IGlucHV0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNidWRnZXRGb3JtTmFtZWApLnZhbHVlO1xuICBjb25zdCBpbnB1dEFtb3VudCA9IE51bWJlcihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjYnVkZ2V0Rm9ybUFtb3VudGApLnZhbHVlKTtcbiAgY29uc3Qgc2VsZWN0ZWRDYXRlZ29yeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNidWRnZXRGb3JtQ2F0ZWdvcnlgKS52YWx1ZTtcbiAgbGV0IHZvaWRWYWx1ZSA9IGBgO1xuXG4gIC8vIFZhbGlkYXIgcXVlIG5pbmd1bm8gZGUgbG9zIGNhbXBvcyBlc3TDqSB2YWPDrW9cbiAgaWYgKFxuICAgIGlucHV0TmFtZSA9PT0gdm9pZFZhbHVlIHx8XG4gICAgaW5wdXRBbW91bnQgPT09IHZvaWRWYWx1ZSB8fFxuICAgIHNlbGVjdGVkQ2F0ZWdvcnkgPT09IHZvaWRWYWx1ZVxuICApIHtcbiAgICB1c2VySW50ZXJmYWNlLnByaW50QWxlcnRzKGBUb2RvcyBsb3MgY2FtcG9zIHNvbiBvYmxpZ2F0b3Jpb3NgLCBgZXJyb3JgKTtcblxuICAgIHJldHVybjtcbiAgfSBlbHNlIGlmIChpbnB1dEFtb3VudCA8PSAwIHx8IGlzTmFOKGlucHV0QW1vdW50KSkge1xuICAgIHVzZXJJbnRlcmZhY2UucHJpbnRBbGVydHMoYENhbnRpZGFkIG5vIHZhbGlkYWAsIGBlcnJvcmApO1xuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gQ3JlYXIgb2JqZXRvIGNvbiBlbCBnYXN0b1xuICBjb25zdCBleHBlbnNlID0geyBpbnB1dE5hbWUsIGlucHV0QW1vdW50LCBzZWxlY3RlZENhdGVnb3J5LCBpZDogRGF0ZS5ub3coKSB9O1xuXG4gIC8vIEHDsWFkaXIgZWwgZ2FzdG8gYSBsYSBsaXN0YSB5IGFsIHByZXN1cHVlc3RvXG4gIGJ1ZGdldC5uZXdFeHBlbnNlcyhleHBlbnNlKTtcblxuICAvLyBPYnRlbmVyIGxvcyB2YWxvcmVzIGFjdHVhbGVzIGRlbCBwcmVzdXB1ZXN0byB5IGdhc3RvXG4gIGNvbnN0IHsgZXhwZW5zZXMsIGJ1ZGdldEF2YWlsYWJsZSwgYnVkZ2V0U3BlbnQgfSA9IGJ1ZGdldDtcblxuICAvLyBJbXByaW1pciBlbCBnYXN0byBlbiBlbCBIVE1MXG4gIHVzZXJJbnRlcmZhY2Uuc2hvd0V4cGVuc2VMaXN0KGV4cGVuc2VzKTtcblxuICAvLyBBY3R1YWxpemFyIGVsIHByZXN1cHVlc3RvIGVuIGxhIFVJXG4gIHVzZXJJbnRlcmZhY2UudXBkYXRlQXZhaWxhYmxlQnVkZ2V0KGJ1ZGdldEF2YWlsYWJsZSwgYnVkZ2V0U3BlbnQpO1xuXG4gIC8vIExsYW1hciBhbCBtw6l0b2RvIHBhcmEgY29tcHJvYmFyIHNpIHNlIGhhIGFsY2FuemFkbyBlbCBwcmVzdXB1ZXN0b1xuICB1c2VySW50ZXJmYWNlLmNoZWNrQnVkZ2V0KGJ1ZGdldCk7XG5cbiAgLy8gTGltcGlhciBsb3MgY2FtcG9zIGRlbCBmb3JtdWxhcmlvXG4gIGNvbnN0IGJ1ZGdldEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjYnVkZ2V0Rm9ybWApO1xuICBidWRnZXRGb3JtLnJlc2V0KCk7XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZUV4cGVuc2UoaWQpIHtcbiAgLy8gRWxpbWluYXIgZWwgZ2FzdG8gZGVsIG9iamV0b1xuICBidWRnZXQuZGVsZXRlRXhwZW5zZShpZCk7XG5cbiAgLy8gT2J0ZW5lciBsb3MgdmFsb3JlcyBhY3R1YWxlcyBkZWwgcHJlc3VwdWVzdG8geSBnYXN0b1xuICBjb25zdCB7IGV4cGVuc2VzLCBidWRnZXRBdmFpbGFibGUsIGJ1ZGdldFNwZW50IH0gPSBidWRnZXQ7XG5cbiAgLy8gRWxpbWluYXIgZWwgZ2FzdG8gZGVsIEhUTUxcbiAgdXNlckludGVyZmFjZS5zaG93RXhwZW5zZUxpc3QoZXhwZW5zZXMpO1xuXG4gIC8vIEFjdHVhbGl6YXIgZWwgcHJlc3VwdWVzdG8gZW4gbGEgVUlcbiAgdXNlckludGVyZmFjZS51cGRhdGVBdmFpbGFibGVCdWRnZXQoYnVkZ2V0QXZhaWxhYmxlLCBidWRnZXRTcGVudCk7XG5cbiAgLy8gTGxhbWFyIGFsIG3DqXRvZG8gcGFyYSBjb21wcm9iYXIgc2kgc2UgaGEgYWxjYW56YWRvIGVsIHByZXN1cHVlc3RvXG4gIHVzZXJJbnRlcmZhY2UuY2hlY2tCdWRnZXQoYnVkZ2V0KTtcbn1cbiJdfQ==
