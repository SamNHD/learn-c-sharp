import { withStyles } from "@mui/styles";
import React from "react";
import OutPatientLayout from "../../layout/content-layout/OutPatientLayout";
class TVLayout extends OutPatientLayout {
    constructor(props) {
        super(props);
    }

    renderBody() {
        let { classes } = this.props;

        return (
            <div className={classes.standByScreen}>
                <div className={classes.header}>
                    <div
                        style={{
                            padding: "0 20px 0 32px",
                            display: "inline-block",
                            textAlign: "right"
                        }}
                    >
                        <img style={{ height: "52px", imageRendering: "-webkit-optimize-contrast" }} src="/dist/assets/MSGGroupLogo.png" />
                    </div>
                    <div
                        style={{
                            textAlign: "center",
                            textTransform: "uppercase",
                            alignItems: "center",
                            justifyContent: "center",
                            fontWeight: "bold",
                            color: "white",
                            fontSize: "34px",
                            flexGrow: "1",
                            letterSpacing: "2.04px",
                            display: "flex",
                            lineHeight: "43px"
                        }}
                    >
                        {this.renderTitle()}
                    </div>
                    <div
                        style={{
                            padding: "0 32px 0 20px",
                            display: "inline-block",
                            textAlign: "left"
                        }}
                    >
                        <img style={{ height: "52px", imageRendering: "-webkit-optimize-contrast" }} src={`/dist/assets/TVLogo/MsgTvLogo_${this.props.hospitalId}.png`} />
                    </div>
                </div>
                <div className={classes.contentDiv}>
                    {this.renderContent()}
                </div>
            </div >
        )
    }
}
const TVStyle = {
    contentDiv: {
        paddingTop: "48px"
    },
    standByScreen: {
        backgroundImage: "url(/dist/assets/image/TVBackground/WaitingRoomBackground.png)",
        height: "100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        flexDirection: "column",
        display: "flex",
        fontFamily: "Muli"
    },
    header: {
        backgroundColor: "#00000080",
        boxSizing: "border-box",
        alignItems: "center",
        display: "flex",
        height: '86px'
    },
}
export default withStyles(TVStyle)(TVLayout)
export { TVStyle, TVLayout }