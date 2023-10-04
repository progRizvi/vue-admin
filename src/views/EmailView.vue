<template>
  <div class="row">
    <div class="col-lg-12">
      <div class="card">
        <div class="card-body">
          <div class="compose-email">
            <div class="mail-box">
              <EmailLayout />
              <aside class="lg-side">
                <div class="inbox-head">
                  <h3 class="input-text">Inbox</h3>
                  <form action="#" class="pull-right position">
                    <div class="input-append inner-append">
                      <input type="text" class="sr-input" placeholder="Search Mail" />
                      <button class="btn sr-btn append-btn" type="button">
                        <i class="fa fa-search"></i>
                      </button>
                    </div>
                  </form>
                </div>
                <div class="mail-option">
                  <div class="chk-all chk-group">
                    <input
                      type="checkbox"
                      class="mail-checkbox mail-group-checkbox"
                      id="checkAll"
                    />
                    <div class="btn-group">
                      <a
                        data-toggle="dropdown"
                        href="#"
                        class="btn mini all m-l-10"
                        aria-expanded="false"
                        >All<i class="fa fa-angle-down"></i
                      ></a>
                      <ul class="card-option-dropdown dropdown-menu">
                        <li><a href="#"> None</a></li>
                        <li><a href="#"> Read</a></li>
                        <li><a href="#"> Unread</a></li>
                      </ul>
                    </div>
                  </div>

                  <div class="btn-group">
                    <a
                      data-original-title="Refresh"
                      data-placement="top"
                      data-toggle="dropdown"
                      href="#"
                      class="btn mini tooltips"
                    >
                      <i class="fa fa-refresh"></i>
                    </a>
                  </div>
                  <div class="btn-group hidden-phone">
                    <a data-toggle="dropdown" href="#" class="btn mini blue" aria-expanded="false">
                      More<i class="fa fa-angle-down"></i
                    ></a>

                    <ul class="card-option-dropdown dropdown-menu">
                      <li>
                        <a href="#"><i class="ti-pencil"></i> Mark as Read</a>
                      </li>
                      <li>
                        <a href="#"><i class="ti-menu-alt"></i>Spam</a>
                      </li>
                      <li>
                        <a href="#"><i class="ti-trash"></i>Delete</a>
                      </li>
                    </ul>
                  </div>
                  <div class="btn-group">
                    <a data-toggle="dropdown" href="#" class="btn mini blue"
                      >Move to<i class="fa fa-angle-down"></i
                    ></a>
                    <ul class="card-option-dropdown dropdown-menu">
                      <li><a href="#">Draft</a></li>
                      <li><a href="#">Spam</a></li>
                      <li><a href="#"> Delete</a></li>
                    </ul>
                  </div>

                  <ul class="unstyled inbox-pagination pagination-list">
                    <li><span>1-50 of 234</span></li>
                    <li>
                      <a class="np-btn" href="#"
                        ><i class="fa fa-angle-left pagination-left"></i
                      ></a>
                    </li>
                    <li>
                      <a class="np-btn" href="#"
                        ><i class="fa fa-angle-right pagination-right"></i
                      ></a>
                    </li>
                  </ul>
                </div>
                <div class="table-responsive">
                  <table class="table table-inbox table-hover table-responsive">
                    <tbody>
                      <tr class="unread">
                        <td class="inbox-small-cells">
                          <input type="checkbox" class="mail-checkbox" />
                        </td>
                        <td class="inbox-small-cells"><i class="ti-star"></i></td>
                        <td class="view-message dont-show">PHPClass</td>
                        <td class="view-message">Added a new class: Login Class Fast Site</td>
                        <td class="view-message inbox-small-cells">
                          <i class="fa fa-paperclip"></i>
                        </td>
                        <td class="view-message text-right">9:27 AM</td>
                      </tr>
                      <tr class="unread">
                        <td class="inbox-small-cells">
                          <input type="checkbox" class="mail-checkbox" />
                        </td>
                        <td class="inbox-small-cells"><i class="ti-star"></i></td>
                        <td class="view-message dont-show">Google Webmaster</td>
                        <td class="view-message">Improve the search presence of WebSite</td>
                        <td class="view-message inbox-small-cells"></td>
                        <td class="view-message text-right">March 15</td>
                      </tr>
                      <tr class="">
                        <td class="inbox-small-cells">
                          <input type="checkbox" class="mail-checkbox" />
                        </td>
                        <td class="inbox-small-cells"><i class="ti-star"></i></td>
                        <td class="view-message dont-show">JW Player</td>
                        <td class="view-message">Last Chance: Upgrade to Pro for</td>
                        <td class="view-message inbox-small-cells"></td>
                        <td class="view-message text-right">March 15</td>
                      </tr>
                      <tr class="">
                        <td class="inbox-small-cells">
                          <input type="checkbox" class="mail-checkbox" />
                        </td>
                        <td class="inbox-small-cells"><i class="ti-star"></i></td>
                        <td class="view-message dont-show">Tim Reid, S P N</td>
                        <td class="view-message">Boost Your Website Traffic</td>
                        <td class="view-message inbox-small-cells"></td>
                        <td class="view-message text-right">April 01</td>
                      </tr>
                      <tr class="">
                        <td class="inbox-small-cells">
                          <input type="checkbox" class="mail-checkbox" />
                        </td>
                        <td class="inbox-small-cells"><i class="ti-star inbox-started"></i></td>
                        <td class="view-message dont-show">
                          Freelancer.com
                          <span class="badge badge-danger pull-right m-t-6">urgent</span>
                        </td>
                        <td class="view-message">Stop wasting your visitors</td>
                        <td class="view-message inbox-small-cells"></td>
                        <td class="view-message text-right">May 23</td>
                      </tr>
                      <tr class="">
                        <td class="inbox-small-cells">
                          <input type="checkbox" class="mail-checkbox" />
                        </td>
                        <td class="inbox-small-cells"><i class="ti-star inbox-started"></i></td>
                        <td class="view-message dont-show">WOW Slider</td>
                        <td class="view-message">New WOW Slider v7.8 - 67% off</td>
                        <td class="view-message inbox-small-cells">
                          <i class="fa fa-paperclip"></i>
                        </td>
                        <td class="view-message text-right">March 14</td>
                      </tr>
                      <tr class="">
                        <td class="inbox-small-cells">
                          <input type="checkbox" class="mail-checkbox" />
                        </td>
                        <td class="inbox-small-cells"><i class="ti-star inbox-started"></i></td>
                        <td class="view-message dont-show">LinkedIn Pulse</td>
                        <td class="view-message">The One Sign Your Co-Worker Will Stab</td>
                        <td class="view-message inbox-small-cells">
                          <i class="fa fa-paperclip"></i>
                        </td>
                        <td class="view-message text-right">Feb 19</td>
                      </tr>
                      <tr class="">
                        <td class="inbox-small-cells">
                          <input type="checkbox" class="mail-checkbox" />
                        </td>
                        <td class="inbox-small-cells"><i class="ti-star"></i></td>
                        <td class="view-message dont-show">
                          Drupal Community<span class="badge badge-success pull-right m-t-6"
                            >megazine</span
                          >
                        </td>
                        <td class="view-message view-message">Welcome to the Drupal Community</td>
                        <td class="view-message inbox-small-cells"></td>
                        <td class="view-message text-right">March 04</td>
                      </tr>
                      <tr class="">
                        <td class="inbox-small-cells">
                          <input type="checkbox" class="mail-checkbox" />
                        </td>
                        <td class="inbox-small-cells"><i class="ti-star"></i></td>
                        <td class="view-message dont-show">Facebook</td>
                        <td class="view-message view-message">Somebody requested a new password</td>
                        <td class="view-message inbox-small-cells"></td>
                        <td class="view-message text-right">June 13</td>
                      </tr>
                      <tr class="">
                        <td class="inbox-small-cells">
                          <input type="checkbox" class="mail-checkbox" />
                        </td>
                        <td class="inbox-small-cells"><i class="ti-star"></i></td>
                        <td class="view-message dont-show">
                          Skype <span class="badge badge-info pull-right m-t-6">family</span>
                        </td>
                        <td class="view-message view-message">Password successfully changed</td>
                        <td class="view-message inbox-small-cells"></td>
                        <td class="view-message text-right">March 24</td>
                      </tr>
                      <tr class="">
                        <td class="inbox-small-cells">
                          <input type="checkbox" class="mail-checkbox" />
                        </td>
                        <td class="inbox-small-cells"><i class="ti-star inbox-started"></i></td>
                        <td class="view-message dont-show">Google+</td>
                        <td class="view-message">alireza, do you know</td>
                        <td class="view-message inbox-small-cells"></td>
                        <td class="view-message text-right">March 09</td>
                      </tr>
                      <tr class="">
                        <td class="inbox-small-cells">
                          <input type="checkbox" class="mail-checkbox" />
                        </td>
                        <td class="inbox-small-cells"><i class="ti-star inbox-started"></i></td>
                        <td class="dont-show">Zoosk</td>
                        <td class="view-message">7 new singles we think you'll like</td>
                        <td class="view-message inbox-small-cells">
                          <i class="fa fa-paperclip"></i>
                        </td>
                        <td class="view-message text-right">May 14</td>
                      </tr>
                      <tr class="">
                        <td class="inbox-small-cells">
                          <input type="checkbox" class="mail-checkbox" />
                        </td>
                        <td class="inbox-small-cells"><i class="ti-star"></i></td>
                        <td class="view-message dont-show">LinkedIn</td>
                        <td class="view-message">Alireza: Nokia Networks, System Group and</td>
                        <td class="view-message inbox-small-cells">
                          <i class="fa fa-paperclip"></i>
                        </td>
                        <td class="view-message text-right">February 25</td>
                      </tr>
                      <tr class="">
                        <td class="inbox-small-cells">
                          <input type="checkbox" class="mail-checkbox" />
                        </td>
                        <td class="inbox-small-cells"><i class="ti-star"></i></td>
                        <td class="dont-show">Facebook</td>
                        <td class="view-message view-message">
                          Your account was recently logged into
                        </td>
                        <td class="view-message inbox-small-cells"></td>
                        <td class="view-message text-right">March 14</td>
                      </tr>
                      <tr class="">
                        <td class="inbox-small-cells">
                          <input type="checkbox" class="mail-checkbox" />
                        </td>
                        <td class="inbox-small-cells"><i class="ti-star"></i></td>
                        <td class="view-message dont-show">Twitter</td>
                        <td class="view-message">Your Twitter password has been changed</td>
                        <td class="view-message inbox-small-cells"></td>
                        <td class="view-message text-right">April 07</td>
                      </tr>
                      <tr class="">
                        <td class="inbox-small-cells">
                          <input type="checkbox" class="mail-checkbox" />
                        </td>
                        <td class="inbox-small-cells"><i class="ti-star"></i></td>
                        <td class="view-message dont-show">InternetSeer Website Monitoring</td>
                        <td class="view-message">http://golddesigner.org/ Performance Report</td>
                        <td class="view-message inbox-small-cells"></td>
                        <td class="view-message text-right">July 14</td>
                      </tr>
                      <tr class="">
                        <td class="inbox-small-cells">
                          <input type="checkbox" class="mail-checkbox" />
                        </td>
                        <td class="inbox-small-cells"><i class="ti-star inbox-started"></i></td>
                        <td class="view-message dont-show">AddMe.com</td>
                        <td class="view-message">
                          Submit Your Website to the AddMe Business Directory
                        </td>
                        <td class="view-message inbox-small-cells"></td>
                        <td class="view-message text-right">August 10</td>
                      </tr>
                      <tr class="">
                        <td class="inbox-small-cells">
                          <input type="checkbox" class="mail-checkbox" />
                        </td>
                        <td class="inbox-small-cells"><i class="ti-star"></i></td>
                        <td class="view-message dont-show">Terri Rexer, S P N</td>
                        <td class="view-message view-message">
                          Forget Google AdWords: Un-Limited Clicks fo
                        </td>
                        <td class="view-message inbox-small-cells">
                          <i class="fa fa-paperclip"></i>
                        </td>
                        <td class="view-message text-right">April 14</td>
                      </tr>
                      <tr class="">
                        <td class="inbox-small-cells">
                          <input type="checkbox" class="mail-checkbox" />
                        </td>
                        <td class="inbox-small-cells"><i class="ti-star"></i></td>
                        <td class="view-message dont-show">Bertina</td>
                        <td class="view-message">IMPORTANT: Don't lose your domains!</td>
                        <td class="view-message inbox-small-cells">
                          <i class="fa fa-paperclip"></i>
                        </td>
                        <td class="view-message text-right">June 16</td>
                      </tr>
                      <tr class="">
                        <td class="inbox-small-cells">
                          <input type="checkbox" class="mail-checkbox" />
                        </td>
                        <td class="inbox-small-cells"><i class="ti-star inbox-started"></i></td>
                        <td class="view-message dont-show">Laura Gaffin, S P N</td>
                        <td class="view-message">
                          Your Website On Google (Higher Rankings Are Better)
                        </td>
                        <td class="view-message inbox-small-cells"></td>
                        <td class="view-message text-right">August 10</td>
                      </tr>
                      <tr class="">
                        <td class="inbox-small-cells">
                          <input type="checkbox" class="mail-checkbox" />
                        </td>
                        <td class="inbox-small-cells"><i class="ti-star"></i></td>
                        <td class="view-message dont-show">Facebook</td>
                        <td class="view-message view-message">john doe Login faild</td>
                        <td class="view-message inbox-small-cells">
                          <i class="fa fa-paperclip"></i>
                        </td>
                        <td class="view-message text-right">feb 14</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import EmailLayout from '../components/pages/email/EmailLayout.vue'

export default { components: { EmailLayout, EmailLayout } }
</script>

<style>
</style>