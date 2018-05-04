import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Tabs, { Tab } from 'material-ui/Tabs';
import Typography from 'material-ui/Typography';
import NovelList from './NovelList'
import store from '../demoStore'

const styles = {
    root: {
    },
};

function TabContainer(props) {
    return (
        <Typography component="div" style={{ padding: 8 * 3 }}>
            {props.children}
        </Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
};

class MyPage extends React.Component {
    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    render() {
        const { classes } = this.props;
        const { value } = this.state;
        return (
            <div className={classes.root}>
                <Tabs value={value} onChange={this.handleChange}>
                    <Tab label="自作作品一覧" />
                    <Tab label="お気に入り作品一覧" />
                </Tabs>
                {value === 0 && <TabContainer><NovelList novels={store.novels} /></TabContainer>}
                {value === 1 && <TabContainer><NovelList novels={store.favorites} /></TabContainer>}
            </div>

        )

    }
}

export default withStyles(styles)(MyPage)
