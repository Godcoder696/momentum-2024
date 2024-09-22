const f2name = (name) => {
  name = name.replace(/ /g,'');
  if (name.length >= 2) return (name[0] + name[1] + "").toUpperCase();
  if (name.length >= 1) return (name[0] + "X").toUpperCase();
  return "XX".toUpperCase();
};

const t3digit = (id) => {
  const str= id.substring(id.length-5,id.length);
  return str;
};

const generateTag = async (userDetail) => {
  const { email, fname, lname, collegeName, role, _id } = userDetail;
  let p1 = "MMT";
  let p2 = "";
  if (role == "organiser") p2 = "OG";
  if (role== "main") p2= "MN"
  if (role == "coordinator") p2 = "CR";
  if (role == "participant") {
    if (collegeName == "The Northcap University (Formerly ITM University)")
      p2 = "IN";
    else p2 = "ON";
  }
  return `${p1}-${p2}-${f2name(fname)}${f2name(lname)}${t3digit(
    _id
  )}`;
};

export default generateTag;