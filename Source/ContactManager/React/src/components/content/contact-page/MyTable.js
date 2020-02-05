import React from "react"

class MyTable extends React.Component {
    constructor(props) {
        super(props)
        this.state = { visability: false }
    }

    render() {
        return (
            <table>
                <row>Hello</row>
            </table>
        )
    }
}

export default MyTable