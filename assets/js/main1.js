class LandbotWhatsAppBtn {
  constructor({ dialcode, phone, text }) {
    this.dialcode = dialcode;
    this.phone = phone;
    this.text = text;
  }

  renderButton() {
    let fontAwesome = document.createElement("script");
    fontAwesome.setAttribute(
      "src",
      "https://kit.fontawesome.com/2640aa91b4.js"
    );
    document.body.appendChild(fontAwesome);

    let roboto = document.createElement("link");
    roboto.setAttribute(
      "href",
      "https://fonts.googleapis.com/css?family=Roboto&display=swap"
    );
    roboto.setAttribute("rel", "stylesheet");
    document.body.appendChild(roboto);

    let styles = document.createElement("link");
    styles.setAttribute(
      "href",
      "https://enesalp.com.tr/css/whatsapp-button-widget.css"
    );
    styles.setAttribute("rel", "stylesheet");
    styles.setAttribute("type", "text/css");
    document.body.appendChild(styles);

    let root = document.createElement("div");
    root.className = "WhatsAppButton__root";
    root.setAttribute("style", "position: fixed; bottom: 10px; right: 20px;");
    document.body.appendChild(root);

    let button_root = document.createElement("a");
    button_root.setAttribute(
      "href",
      `https://api.whatsapp.com/send?phone=${this.dialcode}${this.phone}&text=${this.text}`
    );
    button_root.setAttribute("style", "text-decoration: none");
    button_root.setAttribute("target", "_blank");
    root.appendChild(button_root);

    let button = document.createElement("button");
    button.setAttribute("class", "landbot-whatsapp__button");
    button_root.appendChild(button);

    let whatsappIcon = document.createElement("i");
    whatsappIcon.setAttribute("class", "fab fa-whatsapp");
    whatsappIcon.setAttribute("style", "font-size: 24px; margin-right: 5px");
    button.appendChild(whatsappIcon);

    let button_text = document.createElement("p");
    button_text.setAttribute("style", "margin: 0");
    button_text.innerText = "Mesaj Gönder!";
    button.appendChild(button_text);
  }
}
var whatsAppBtn = new LandbotWhatsAppBtn({
  dialcode: "+905323359400",
  phone: "ESEN GROUP YAPI",
  text: "Merhaba,",
});
whatsAppBtn.renderButton();
