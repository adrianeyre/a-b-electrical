import * as React from 'react';
import { Component } from 'react';

import IDataService from '../../services/interface/data-service-interface';
import IImageListProps from './interface/image-list-props';
import IImageListState from './interface/image-list-state';

import './image-list.css';

export default class ImageList extends Component<IImageListProps, IImageListState> {
	constructor(props: IImageListProps) {
		super(props);

		this.state = {
			data: this.props.data,
		}
	}

	public render() {
		return <div className="image-list-container">
			{ this.state.data && this.state.data.map((item: IDataService, imageIndex: number) => <div key={ `image-list-${ imageIndex }` } className="image-list-box">
				{ item.image?.filename &&
					<img
						className="thumbnail"
						src={ item.image.filename }
						width={ this.props.width ? this.props.width : undefined }
						height={ this.props.height ? this.props.height : undefined }
					/>
				}
			</div> )}
		</div>
	}
}
