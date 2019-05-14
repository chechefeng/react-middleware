import React, {PureComponent} from 'react';
import Part_1 from "./part1"
import Part_2 from "./part2"
import Part_3 from "./part3"
import Part_4 from "./part4"
import Part_5 from "./part5"
import Part_6 from "./part6"
import Part_7 from "./part7"
import Part_8 from "./part8"

export default class Loadmore extends PureComponent {
    constructor(props) {
        super(props)

    };

    componentDidMount = () => {
    };

    render() {
        return (
            <main className="body">
                <div className="body__inner">
                    <Part_1/>
                    <Part_2/>
                    <Part_3/>
                    <Part_4/>
                    <Part_5/>
                    <Part_6/>
                    <Part_7/>
                    <Part_8/>

                </div>

            </main>
        )
    }
}