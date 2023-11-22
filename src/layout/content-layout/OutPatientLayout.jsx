import BaseLoadData from '../../components/Base/BaseLoadData';

export default class OutPatientLayout extends BaseLoadData {
   constructor(props) {
      super(props);

   }
   loadData(callback) {
      callback();
   }
   // renderBody() {
   //    throw "Not implemented renderBody in PageLayout"
   // }
   // consumerContent() {

   //    return (
   //       <React.Fragment>
   //          {this.renderBody()}
   //       </React.Fragment>
   //    );
   // }
}
