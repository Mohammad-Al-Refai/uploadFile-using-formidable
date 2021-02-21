const upload_btn = document.getElementById("upload");
const input = document.getElementById("file");
const FILE = {
  file: null,
  setFile: function (value) {
    this.file = value;
  },
  getFile: function () {
    return this.file;
  },
};
input.addEventListener("change", (e) => {
  FILE.setFile(input.files[0]);
});

upload_btn.addEventListener("click", (e) => {
  console.log(FILE.getFile());
  console.log(FILE);
  upload(FILE.file ).then((v)=>{
    console.log(v)
  })
});

async function upload(file) {
    let data=new FormData()
    data.append("file",file)
 let res=await fetch("http://localhost:5000/upload", {
    method: "POST",
    body:data,
  });

  let x=res.json()
  return new Promise((resolve,reject)=>{
    resolve(x)
  })
}
