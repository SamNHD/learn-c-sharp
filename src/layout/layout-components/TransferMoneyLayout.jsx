import React from 'react';
import { getValueFromPaddingOrMargin } from 'general/CleanNodeHelper';
import EHealthBaseConsumer from '../../components/Base/EHealthBaseConsumer';
import LineShadow from '../../components/ui-kit/LineShadow';
import EHealthTabContainer, { EHealthTab } from '../../components/ui-kit/tab/EHealthTabContainer';
import { I3Div, I3Component } from '../../importer';

export default class TransferMoneyLayout extends EHealthBaseConsumer {
   constructor(props) {
      super(props);
      this.title = null;
      this.titleTab = null
      this.state = {
         tabValue: 0
      }
   }

   renderHeader() {
      return null;
   }

   _renderTab = () => {
      return this.getTabOptions();
   }

   getTabOptions() {
      return null;
   }

   confirmButton() {
      return null
   }

   cancelButton() {
      return null
   }

   consumerContent() {
      let tabOptions = this.getTabOptions();
      let { classes } = this.props;
      let { tabValue } = this.state;
      return (
         <React.Fragment>
            <I3Div
               backgroundColor="white"
            >
               {this.title ? (
                  <I3Div
                     padding={["lg", , ,]}
                     backgroundColor="white"
                     className={classes.stickyHeader}
                  >
                     <I3Div
                        variant="h6"
                        color="primary5"
                        fontWeight="bold"
                        padding={[, , , "lg1"]}
                     >
                        {this.title}
                     </I3Div>
                     <LineShadow margin={["lg1", "no", "lg1", "no"]} />
                  </I3Div>) : null}

               <I3Div
                  padding={[, "lg", , "lg"]}
               >
                  <I3Div>
                     {this.renderHeader()}
                  </I3Div>
                  {this.titleTab ?
                     <I3Div>
                        <I3Component variant="body2" color="grey7">{this.titleTab}</I3Component>
                        <I3Div
                           padding={["sm", , ,]}
                           className={classes.boxSelect}>
                           <EHealthTabContainer
                              fullWidth
                              primary={true}
                              value={tabValue}
                              onChange={(newValue) => {
                                 this.setState({ tabValue: newValue });
                              }}
                           >
                              {tabOptions.map((item) => {
                                 return (
                                    <EHealthTab key={item.value} label={item.label} />
                                 )
                              })}
                           </EHealthTabContainer>
                        </I3Div>
                     </I3Div>
                     : null}
                  <I3Div
                     padding={["lg", , "lg",]}
                  >
                     {this._renderTab()}
                  </I3Div>
               </I3Div>
               <I3Div
                  padding={["sm", "lg", "lg1",]}
                  display="flex"
                  justifyContent="flex-end"
                  className={classes.stickyFooter}
                  backgroundColor="white"
               >
                  {this.cancelButton()}
                  <I3Div margin={[, "md", ,]}>
                  </I3Div>
                  {this.confirmButton()}
               </I3Div>
            </I3Div>
         </React.Fragment>
      )
   }
}

let styles = {
   boxSelect: {
      margin: `0 -${getValueFromPaddingOrMargin("lg")}`
   },
   stickyHeader: {
      position: "sticky",
      top: "-20px",
      zIndex: 1,
   },
   stickyFooter: {
      position: "sticky",
      bottom: "-20px",
      zIndex: 1,
   }
}


export { TransferMoneyLayout, styles };