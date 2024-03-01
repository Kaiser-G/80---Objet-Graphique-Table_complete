class Table {
  id_zone = "";
  class_table = "";
  data = [];
  header = "";
  class_modif = "";
  class_suppr = "";
  class_vue = "";
  icone_modif = "";
  icone_vue = "";
  icone_suppr = "";
  separateur = "*";
  //exo2
  BS_class_vue = "";
  BS_class_modif = "";
  BS_class_sppr = "";
  BS_toggle_modal = "";
  BS_target_vue = "";
  BS_target_modif = "";
  BS_target_suppr = "";
  id_tbody = "";
  append = false;

  // Les méthodes
  fonction_modif = ""; // doit contenir la fonction qui sera appelée lors du
  // click sur le bouton MODIF
  fonction_suppr = ""; // doit contenir la fonction qui sera appelée lors du
  // click sur le bouton SUPPR
  fonction_vue = ""; // doit contenir la fonction qui sera appelée lors du
  // click sur le bouton VUE

  separateur = "*"; // Par défaut les valeurs seront séparées par une *

  //générer
  generer() {
    if (this.id_zone != "") {
      let tab = document.createElement("table");
      tab.className = this.class_table;

      //création du thead
      let thead = document.createElement("thead");
      tab.appendChild(thead);

      //génération des colonnes du head
      let tr_head = document.createElement("tr"); // pour les lignes
      thead.appendChild(tr_head);
      this.header.forEach((th_text) => {
        let th = document.createElement("th");
        th.innerText = th_text;
        tr_head.appendChild(th);
      });

      // si on reçu des fonctions pour MODIF ou SUPPR permet d'ajouter la colonne ACTIONS
      if (this.fonction_modif || this.fonction_suppr || this.fonction_vue) {
        let th = document.createElement("th");
        th.innerText = "Actions";
        tr_head.appendChild(th);
      }

      //création du body
      let tbody = document.createElement("tbody");
      tbody.id = this.id_tbody;
      tab.appendChild(tbody);

      //création des lignes dans body
      this.data.forEach((item) => {
        let tr_body = document.createElement("tr");
        tbody.appendChild(tr_body);
        //généré des cellules de la ligne (colonnes)
        item.forEach((cellule) => {
          let td = document.createElement("td");
          td.innerText = cellule;
          tr_body.appendChild(td);
        });

        //typeof
        if (
          typeof this.fonction_modif == "function" ||
          typeof this.fonction_suppr == "function" ||
          typeof this.fonction_vue == "function"
        ) {
          //création des boutons
          //bouton vue
          let td = document.createElement("td");
          tr_body.appendChild(td);

          let values = item.join(this.separateur);
          // alert(values);
          if (typeof this.fonction_vue == "function") {
            let btn = document.createElement("button");
            btn.className = this.class_vue + this.icone_vue + this.BS_class_vue;
            //btn.className = "vueRegion btn btn-danger btn-sm fas fa-eye fa-sm";
            btn.value = values;
            //création fenetre MODAL sur bouton vue
            // JSON.parse(this.BS_toggle_modal); //Plante si pas JSON

            btn.setAttribute(
              this.BS_toggle_modal.attribut,
              this.BS_toggle_modal.valeur
            );

            btn.setAttribute(
              this.BS_target_vue.attribut,
              this.BS_target_vue.valeur
            );

            btn.addEventListener(
              "click",
              (e) => {
                this.fonction_vue(e);
              },
              false
            );
            td.appendChild(btn);
          }

          //création bouton modif
          if (typeof this.fonction_modif == "function") {
            let btn2 = document.createElement("button");
            btn2.className =
              this.class_modif + " " + this.icone_modif + this.BS_class_modif;
            // btn2.className = "btn btn-success btn-sm fas fa-pencil fa-sm";
            btn2.value = values;

            //création fenetre MODAL sur bouton vue
            // JSON.parse(this.BS_toggle_modal); //Plante si pas JSON

            btn2.setAttribute(
              this.BS_toggle_modal.attribut,
              this.BS_toggle_modal.valeur
            );

            btn2.setAttribute(
              this.BS_target_modif.attribut,
              this.BS_target_modif.valeur
            );

            btn2.addEventListener(
              "click",
              (e) => {
                this.fonction_modif(e);
              },
              false
            );
            td.appendChild(btn2);
          }

          //création bouton suppr
          if (typeof this.fonction_suppr == "function") {
            let btn3 = document.createElement("button");
            btn3.className =
              this.class_suppr + this.icone_suppr + this.BS_class_sppr;
            // btn3.className ="btn btn-info btn-sm fas fa-trash fa-sm";
            btn3.value = values;

            //création fenetre MODAL sur bouton vue
            // JSON.parse(this.BS_toggle_modal); //Plante si pas JSON

            btn3.setAttribute(
              this.BS_toggle_modal.attribut,
              this.BS_toggle_modal.valeur
            );

            btn3.setAttribute(
              this.BS_target_suppr.attribut,
              this.BS_target_suppr.valeur
            );

            btn3.addEventListener(
              "click",
              (e) => {
                this.fonction_suppr(e);
              },
              false
            );
            td.appendChild(btn3);
          }
        }
      });
      //affiche le tableau
      document.getElementById(this.id_zone).appendChild(tab);
      // zone.appendChild(tab);
    } else {
      throw new Error(
        "Pour générer une table, il faut préciser la proprieté id_zone"
      );
    }
  }
}
