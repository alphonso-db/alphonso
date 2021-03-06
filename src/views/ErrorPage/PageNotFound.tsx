import * as React from 'react';
import { Link } from 'react-router';
import './PageNotFound.less';

export default class PageNotFound extends React.Component<any, any> {
	constructor(props: any) {
		super(props);
	}

  render() {
    return (
      <div className="container">
        <div className="text-center">
          <div className="col-md-12 characters">
          </div>
          <div className="col-md-12">
            <h1>Page not found</h1>
            <p>Sorry, an error has occured, the page you are trying to visit is not available.</p>
            <p>It could be a broken or dead link!</p>
            <p>
              <Link to="/" className="btn btn-primary"><i className="fa fa-lg fa-home"></i> Go back to Home Page</Link>
            </p>
            <hr/>
            <a href="//github.com/hegdeashwin/alphonso" target="_blank" className="btn btn-link btn-sm">Github Home Page</a>
            <a href="//github.com/hegdeashwin/alphonso/releases" target="_blank" className="btn btn-link btn-sm">Release Page</a>
            <a href="//github.com/hegdeashwin/alphonso/milestones" target="_blank" className="btn btn-link btn-sm">Milestones</a>
            <a href="//github.com/hegdeashwin/alphonso/issues" target="_blank" className="btn btn-link btn-sm">Report Issues</a>
            <a href="//github.com/hegdeashwin/alphonso/pulls" target="_blank" className="btn btn-link btn-sm">Open Pull Requests</a>
            <a href="//github.com/hegdeashwin/alphonso" target="_blank" className="btn btn-link btn-sm">About Alphonso</a>
          </div>
        </div>
      </div>
    );
  }
}
