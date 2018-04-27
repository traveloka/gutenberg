/**
 * WordPress dependencies
 */
import { Panel } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

/**
 * Internal Dependencies
 */
import PostStatusTvlk from '../post-status-tvlk';
import PostStatus from '../post-status';
import PostExcerpt from '../post-excerpt';
import PostTaxonomies from '../post-taxonomies';
import FeaturedImage from '../featured-image';
import DiscussionPanel from '../discussion-panel';
import LastRevision from '../last-revision';
import PageAttributes from '../page-attributes';
import DocumentOutlinePanel from '../document-outline-panel';
import MetaBoxes from '../../meta-boxes';
import SettingsHeader from '../settings-header';
import Sidebar from '../';

const SIDEBAR_NAME = 'edit-post/document';

const DocumentSidebarTvlk = () => (
	<Sidebar
		name={ SIDEBAR_NAME }
		label={ __( 'Editor settings' ) }
	>
		<SettingsHeader sidebarName={ SIDEBAR_NAME } />
		<Panel>
			<MetaBoxes location="side"/>
			<PostStatusTvlk />
			<FeaturedImage />
			<PostTaxonomies />
			<PageAttributes />
		</Panel>
	</Sidebar>
);

export default DocumentSidebarTvlk;
