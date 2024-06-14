/**
 * @author  sai
 * created  2024-05-27
 * project  coding-assignment-12-cra
 */

export type DefaultComponentProps = {
  /**
   * Determines if the component can be interacted with
   */
  disabled?: boolean;
};

export type DefaultImageComponentProps = DefaultComponentProps & {
  /**
   * What is shown when the image fails to load
   */
  altText: string;
  /**
   * Specifies what image should be loaded
   */
  src: string;
  /**
   * Optionally sets the test id for the component
   */
  testId?: string;
};
