# EHealth.Node

* Hướng dẫn setup nodejs + webpack 5
    - Download, cài đặt nvm (node version manager) để switch giữa các phiên bản nodejs
    https://github.com/coreybutler/nvm-windows/releases
    - Chạy cmd Administrator.
    - nvm install 12.0.0 (Version 16.14.0 có tự động cài peerDependencies nên không recommend)
    - nvm use 12.0.0.
    - Xóa node-modules EHealth.
    - npm install.
    - npm run ... như cũ.

Các library mới:

    "@mui/icons-material": "^5.5.0",
    "@mui/lab": "^5.0.0-alpha.72",
    "@mui/material": "^5.4.4",
    "@mui/styles": "^5.4.4",
    "@mui/x-data-grid": "^5.6.0",

    * Lưu ý import và sử dụng các component.
    - import withStyles: import { withStyles } from '@mui/styles';
    - import material-ui/core: import { .... } from '@mui/material';
    - Component ToolTip: Bắt buộc phải có cơ chế pass ref vào HTML element (div, span...) hoặc MUI component (có sẵn forwardRef) để ToolTip xác định vị trí render.
        ví dụ: với ComponentA có sẵn cần hiện tooltip cho ComponentA: 
        export default ComponentA; //Export để chỗ cũ dùng + có khả năng extends

        Dùng 1 trong 2 cách:
        const ForwardRefCompoentA = React.forwardRef((props, ref) => <ComponentA {...props} forwardedRef={ref} />); 
        Cách khác: 
        import ForwardRefWrapper from 'BaseComponent/base/ForwardRefWrapper.jsx';
        const ForwardRefCompoentA = ForwardRefWrapper(ComponentA);

        //ComponentA nhận thêm props mới là formwardedRef = ref của ToolTip truyền vào; ComponentA cần pass props này xuống HTML element hoặc MUI component dưới dạng ref

        export { ForwardRefCompoentA };
        <ToolTip {...tooltipProps}><ForwardRefCompoentA/></ToolTip>

    - Ngoài ToolTip còn một số component của MUI có cùng tính chất Ehealth chưa dùng đến, có thể xem trên docs của MUI.
    - Cẩn thận khi sử dụng Popover/Popper trong modal vì zIndex đã thay đổi.
