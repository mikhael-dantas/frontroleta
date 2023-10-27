import moment from 'moment';

function FooterLayout() {
  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <span>Analisador Dinhu 🎲 © {moment().format("YYYY")}</span>
    </div>
  );
}

export default FooterLayout;
