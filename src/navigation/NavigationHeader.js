import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavBar, NavBarBody, NavBarButton, NavBarLeft, NavBarRight, Icon, Text } from '@99xt/first-born';
import colors from '../shared/style/colors';

export default class NavigationHeader extends Component {

    _renderLeft() {
        const { onLeft, iconLeft, textLeft, typeLeft } = this.props;
        if (onLeft) {
            if (iconLeft || textLeft) {
                return (
                    <NavBarLeft>
                        <NavBarButton onPress={onLeft} color={colors.activeNav} >
                            {iconLeft && <Icon name={iconLeft} />}
                            {textLeft && <Text >{textLeft}</Text>}
                        </NavBarButton>
                    </NavBarLeft>
                );
            } else if (typeLeft) {
                return (
                    <NavBarLeft>
                        <NavBarButton type={typeLeft} onPress={onLeft} color={colors.activeNav} />
                    </NavBarLeft>
                );
            }
            return (
                <NavBarLeft>
                    <NavBarButton type='back' onPress={onLeft} color={colors.activeNav} />
                </NavBarLeft>
            );
        }
        return (<NavBarLeft />);
    }

    _renderRight() {
        const { onRight, iconRight, textRight, typeRight } = this.props;
        if (onRight) {
            if (iconRight || textRight) {
                return (
                    <NavBarRight>
                        <NavBarButton onPress={onRight} color={colors.activeNav} >
                            {iconRight && <Icon name={iconRight} />}
                            {textRight && <Text >{textRight}</Text>}
                        </NavBarButton>
                    </NavBarRight>
                );
            }
            return (
                <NavBarRight>
                    <NavBarButton type={typeRight} onPress={onRight} color={colors.activeNav} />
                </NavBarRight>
            );
        }
        return (<NavBarRight />);
    }

    render() {
        const { title } = this.props
        return (
            <NavBar statusBarColor={colors.navBack} statusBarContent="dark-content">
                {this._renderLeft()}
                <NavBarBody>
                    <Text style={{ color: colors.black }}>{title}</Text>
                </NavBarBody>
                {this._renderRight()}
            </NavBar>
        );
    }
}

NavigationHeader.propTypes = {
    iconRight: PropTypes.string,
    textRight: PropTypes.string,
    typeRight: PropTypes.string,
    iconLeft: PropTypes.string,
    textLeft: PropTypes.string,
    typeLeft: PropTypes.string,
    title: PropTypes.string
}