// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import {connect} from 'react-redux';
import {bindActionCreators, Dispatch} from 'redux';

import {GenericAction} from 'mattermost-redux/types/actions';

import {addReaction} from 'actions/post_actions.jsx';

import PostReaction from './post_reaction';
import {removeReaction} from 'mattermost-redux/actions/posts';

function mapDispatchToProps(dispatch: Dispatch<GenericAction>) {
    return {
        actions: bindActionCreators({
            addReaction,
            removeReaction
        }, dispatch),
    };
}

export default connect(null, mapDispatchToProps)(PostReaction);
