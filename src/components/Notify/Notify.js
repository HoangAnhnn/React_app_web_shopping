import { useDispatch, useSelector } from 'react-redux';
import { act_hide_notify } from '~/reudx/actions/actions';

function Notify() {
    let selector = useSelector((state) => state.notify);
    const dispatch = useDispatch();
    const handleClose = () => {
        dispatch(act_hide_notify());
    };
    if (selector.status) {
        setTimeout(() => {
            handleClose();
        }, 1500);
    }
    // console.log(selector);
    return (
        <>
            {selector.status ? (
                <div className="notify">
                    <div>
                        <div className="success-checkmark">
                            <div className="check-icon">
                                <span className="icon-line line-tip"></span>
                                <span className="icon-line line-long"></span>
                                <div className="icon-circle"></div>
                                <div className="icon-fix"></div>
                            </div>
                        </div>
                        <div className="info-notify">{selector.notify}</div>
                    </div>
                </div>
            ) : (
                <></>
            )}
        </>
    );
}

export default Notify;
