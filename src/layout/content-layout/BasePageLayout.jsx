import EHealthBaseConsumer from '../../components/Base/EHealthBaseConsumer';

class BasePageLayout extends EHealthBaseConsumer {
    constructor(props) {
        super(props);
        this.state = {
            isDataLoaded: false,
        };
        this._overrideDidMount = true;

    }
    componentDidMount() {
        this._overrideDidMount = false;
        this.loadData(() => {
            this.setState({ isDataLoaded: true });
        })
    }

    loadData(finishLoading) {
        finishLoading();
    }

    checkOverride() {
        if (this._overrideDidMount == true) {
            throw ("Must not override componentDidMount in BasePageLayout");
        }
    }
    // consumerContent() {
    //     const { isDataLoaded } = this.state;
    //     if (isDataLoaded) return this.renderBody();
    //     else return <span>Loading...</span>
    // }
}

export default BasePageLayout;