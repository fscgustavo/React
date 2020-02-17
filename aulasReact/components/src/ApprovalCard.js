import React from 'react';

const ApprovalCard = props => {
    return(
        <div className="ui card">
            <div className="content">
                {props.children}
            </div>
            <div className="extra content">
                <div class="ui two buttons">
                    <div class="ui basic red button">
                        Reject
                    </div>
                    <div className="ui basic green button">
                        Approve
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ApprovalCard;