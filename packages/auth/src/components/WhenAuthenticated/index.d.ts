export interface WhenAuthenticatedProps {
    /** The route path the component will used to match against the browser URL. */
    path: string;
    /** The component class or function that will be rendered if the application is
     * authenticated. */
    component?: React.ComponentType;
    /** The route where the component should redirect if the application ins't authenticated. It can also be an
     * object with the same shape of the `to` prop in the react router Redirect component.
     */
    redirect?: string | Record<string, unknown>;
}

export default function (props: WhenAuthenticatedProps): JSX.Element | null;
