import React,{Component} from 'react';

export default class Kursus extends Component{
    constructor (props) {
        super(props);
        this.state = {
            paket: "kursus progaming",
            material: "Vue dan Laravel",
            desc: "Belajar Vue dan Laraver",
            harga: 750000
        };
    }
    render() {
        return(
            <div>
                <h1>Nama Paket         : {this.state.paket}</h1><br/>
                <h1>Jenis Material     : {this.state.material}</h1><br/>
                <h1>Deskripsi Paket    : {this.state.desc}</h1><br/>
                <h1>Harga Paket        : {this.state.harga}</h1><br/>
            </div>
        )
    }
}