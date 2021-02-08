var jualmobil = {
    iklan:function(){
        document.write(`BU, saya ` + this.name + `, jual ` + this.merek + `, tahun ` + this.tahun + `,bekas`);
    }
};

var orang = Object.create(jualmobil);

orang.name = "Tompel"
orang.merek = "Mobil Avanza"
orang.tahun = 2017;
orang.iklan();