(()=>{const e=document.querySelector("form"),r=document.getElementById("email"),t=document.getElementById("country"),o=document.getElementById("zipCode"),s=document.getElementById("password"),n=document.getElementById("passwordConfirm");function a(e,r){const t=e();t.success?(c.removeErrorContainsText(t.keyword),r.setCustomValidity("")):(c.addNewError(t.errorMessage),r.setCustomValidity(t.errorMessage))}function i(){return n.validity.valueMissing?{success:!1,errorMessage:"You need to enter a password confirmation",keyword:"password confirmation"}:s.value!==n.value?{success:!1,errorMessage:"You must enter the same password at password confirmation.",keyword:"password confirmation"}:{success:!0,keyword:"password confirmation"}}function d(e,r){return{element:e,validator:r}}const c=(()=>{const e=document.getElementById("errors");function r(r){return[...e.children].filter((e=>e.textContent.toLowerCase().includes(r.toLowerCase())))}function t(e){return r(e).length>0}return{addNewError:function(r){if(t(r))return;const o=document.createElement("li");o.textContent=r,e.appendChild(o)},removeErrorContainsText:function(e){r(e).forEach((e=>e.remove()))},containsSameError:t}})(),u=[d(r,(function(){return r.validity.typeMismatch||r.validity.valueMissing?{success:!1,errorMessage:"The email must be a valid email.",keyword:"email"}:{success:!0,keyword:"email"}})),d(o,(function(){return o.validity.tooShort||o.validity.tooLong||o.validity.valueMissing?{success:!1,errorMessage:"Your zip code must have 5 numbers.",keyword:"zip code"}:isNaN(o.value)?{success:!1,errorMessage:"Your zip code needs to be numbers only.",keyword:"zip code"}:{success:!0,keyword:"zip code"}})),d(t,(function(){return t.validity.valueMissing?{success:!1,errorMessage:"You need to enter a country",keyword:"country"}:{success:!0,keyword:"country"}})),d(s,(function(){return s.validity.valueMissing?{success:!1,errorMessage:"You need to enter password",keyword:"password"}:s.value.length<8?{success:!1,errorMessage:"You need to enter at least 8 characters in the password",keyword:"password"}:(a(i,n),{success:!0,keyword:"password"})})),d(n,i)];var l;l=u,e.addEventListener("submit",(e=>{l.every((e=>e.validator().success))?(alert("Sending..."),e.preventDefault()):(e.preventDefault(),alert("Invalid form."))})),function(e){e.forEach((e=>{e.element.addEventListener("input",(()=>a(e.validator,e.element))),e.element.addEventListener("focusout",(()=>a(e.validator,e.element)))}))}(u)})();